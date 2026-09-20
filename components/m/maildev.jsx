import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz7wb2t7x.css';
import '../../css/v/vza9gr8cj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz7wb2t7x"/><path class="vza9gr8cj"/>`,
		"fallback": "selfhst:maildev",
	});
}

export default Component;
