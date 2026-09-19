import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yny8l0b8s.css';
import '../../css/w/wa8fn4ggq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yny8l0b8s"/><path clip-rule="evenodd" class="wa8fn4ggq"/></g>`,
		"fallback": "gg:smart-home-refrigerator",
	});
}

export default Component;
