import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m45zbqb6j.css';
import '../../css/i/ih8q-mbdd.css';
import '../../css/l/lv496ujfj.css';
import '../../css/g/gb8nttfvj.css';
import '../../css/z/ze16glwgc.css';
import '../../css/e/e5kb0w1sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m45zbqb6j"/><path class="ih8q-mbdd"/><path class="lv496ujfj"/><path class="gb8nttfvj"/><path class="ze16glwgc"/><path class="e5kb0w1sr"/></g>`,
		"fallback": "reicon:volume-knob-duotone",
	});
}

export default Component;
