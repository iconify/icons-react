import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzujjfdcc.css';
import '../../css/n/neznnqosl.css';
import '../../css/k/k565uibtn.css';
import '../../css/h/hgj5ee-ee.css';
import '../../css/t/tp3kvz0bl.css';
import '../../css/v/vf4dvcc3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bzujjfdcc"/><path class="neznnqosl"/><path class="k565uibtn"/><path class="hgj5ee-ee"/><path class="tp3kvz0bl"/><path class="vf4dvcc3d"/></g>`,
		"fallback": "streamline-ultimate-color:shipment-delivered",
	});
}

export default Component;
