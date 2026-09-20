import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2icx-b6w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2icx-b6w"/>`,
		"fallback": "selfhst:repoflow-dark",
	});
}

export default Component;
