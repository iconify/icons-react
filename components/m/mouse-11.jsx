import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z1p5pfbgn.css';
import '../../css/l/lcd2nmarj.css';
import '../../css/x/xhce_hbyg.css';
import '../../css/h/hamkaq0zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z1p5pfbgn"/><path class="lcd2nmarj"/><path class="xhce_hbyg"/><path class="hamkaq0zb"/></g>`,
		"fallback": "hugeicons:mouse-11",
	});
}

export default Component;
