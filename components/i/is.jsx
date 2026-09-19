import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kcgjvo2om.css';
import '../../css/i/in06wd4ew.css';
import '../../css/b/be0p64buu.css';

const viewBox = {"width":301,"height":217};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kcgjvo2om"/><path class="in06wd4ew"/><path class="be0p64buu"/></g>`,
		"fallback": "cif:is",
	});
}

export default Component;
