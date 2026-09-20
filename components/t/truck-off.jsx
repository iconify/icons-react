import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z2ns83bht.css';
import '../../css/u/ujv6n5bmi.css';
import '../../css/l/lauwqs8mt.css';
import '../../css/l/l5q_j8fuy.css';
import '../../css/v/vx6mszb2a.css';
import '../../css/w/wp57mfoga.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z2ns83bht"/><path clip-rule="evenodd" class="ujv6n5bmi"/><path clip-rule="evenodd" class="lauwqs8mt"/><path class="l5q_j8fuy"/><path clip-rule="evenodd" class="vx6mszb2a"/><path clip-rule="evenodd" class="wp57mfoga"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:truck-off",
	});
}

export default Component;
