import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xtis6_vbr.css';
import '../../css/s/sy99x-beb.css';
import '../../css/y/ymt-x2xna.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xtis6_vbr"/><path class="sy99x-beb"/><path class="ymt-x2xna"/></g>`,
		"fallback": "pepicons:smartphone-cutout-print",
	});
}

export default Component;
