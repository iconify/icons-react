import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pqitm7bqk.css';
import '../../css/u/u5xjt86lx.css';
import '../../css/r/rlo9g2qew.css';
import '../../css/i/ina5vcbuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pqitm7bqk"/><circle class="u5xjt86lx"/><circle class="rlo9g2qew"/><path class="ina5vcbuj"/></g>`,
		"fallback": "hugeicons:paint-board",
	});
}

export default Component;
