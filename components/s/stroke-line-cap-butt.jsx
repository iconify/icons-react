import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfyy1z9jr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfyy1z9jr"/>`,
		"fallback": "lucide:stroke-line-cap-butt",
	});
}

export default Component;
