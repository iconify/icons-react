import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydt-crpjk.css';
import '../../css/k/kqwt2ibko.css';
import '../../css/h/h_tdzjpmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ydt-crpjk"/><path class="kqwt2ibko"/><path class="h_tdzjpmg"/></g>`,
		"fallback": "andrsrxn:layers-minus",
	});
}

export default Component;
