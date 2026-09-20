import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/c/cc8_vo6ef.css';
import '../../css/e/etbvuncfk.css';
import '../../css/z/z26-jybqr.css';
import '../../css/e/e31npysoq.css';
import '../../css/m/m1_01rb-q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="cc8_vo6ef"/><path class="etbvuncfk"/><path class="z26-jybqr"/><path class="e31npysoq"/><path class="m1_01rb-q"/></g>`,
		"fallback": "streamline-kameleon-color:pokeball",
	});
}

export default Component;
