import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ysm6kgbvw.css';
import '../../css/w/w3rad0bwq.css';
import '../../css/c/cloky08hd.css';
import '../../css/x/xi8a1wbvw.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ysm6kgbvw"/><path class="w3rad0bwq"/><circle class="cloky08hd"/><circle class="xi8a1wbvw"/></g>`,
		"fallback": "cif:mv",
	});
}

export default Component;
