import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dd8-t9g-m.css';
import '../../css/m/mlrwjqbkp.css';
import '../../css/k/knmar5oyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 21.26 11.91)" class="dd8-t9g-m"/><rect transform="rotate(90 21.26 2.73)" class="mlrwjqbkp"/><path class="knmar5oyo"/></g>`,
		"fallback": "andrsrxn:panels-bottom-filled",
	});
}

export default Component;
