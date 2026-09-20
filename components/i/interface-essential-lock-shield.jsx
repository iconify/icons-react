import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgcl_acrx.css';
import '../../css/n/n83ma-b2t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgcl_acrx"/><path class="n83ma-b2t"/>`,
		"fallback": "streamline-pixel:interface-essential-lock-shield",
	});
}

export default Component;
