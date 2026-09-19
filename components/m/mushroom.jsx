import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t2ouk1byg.css';
import '../../css/l/l0zoj3aiv.css';
import '../../css/p/p0b_9mvhd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t2ouk1byg"/><path class="l0zoj3aiv"/><path class="p0b_9mvhd"/></g>`,
		"fallback": "fluent-emoji-flat:mushroom",
	});
}

export default Component;
