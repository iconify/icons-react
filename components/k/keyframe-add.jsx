import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s80_vrbhr.css';
import '../../css/z/z4_5qr45k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s80_vrbhr"/><path class="z4_5qr45k"/></g>`,
		"fallback": "hugeicons:keyframe-add",
	});
}

export default Component;
