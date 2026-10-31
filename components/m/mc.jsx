import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3_i0qbqu.css';
import '../../css/o/o8b2c2wws.css';

const viewBox = {"width":301,"height":241};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c3_i0qbqu"/><path class="o8b2c2wws"/></g>`,
		"fallback": "cif:mc",
	});
}

export default Component;
