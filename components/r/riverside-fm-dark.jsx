import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eugzn-b3q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eugzn-b3q"/>`,
		"fallback": "selfhst:riverside-fm-dark",
	});
}

export default Component;
