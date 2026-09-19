import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xwiz1tvey.css';
import '../../css/y/ywc8e_beb.css';
import '../../css/z/zsopgk3nh.css';
import '../../css/v/vgg3nib1c.css';
import '../../css/e/e3-z2nbly.css';
import '../../css/q/qkiwevqva.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xwiz1tvey"/><path class="ywc8e_beb"/><path clip-rule="evenodd" class="zsopgk3nh"/><path class="vgg3nib1c"/><path class="e3-z2nbly"/><path clip-rule="evenodd" class="qkiwevqva"/></g>`,
		"fallback": "pepicons:motorcycle-print",
	});
}

export default Component;
