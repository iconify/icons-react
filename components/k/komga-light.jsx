import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qll5a5f5p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qll5a5f5p"/>`,
		"fallback": "selfhst:komga-light",
	});
}

export default Component;
