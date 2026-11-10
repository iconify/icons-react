import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-10cpb2d.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/n/nz2ttyb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o-10cpb2d"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="nz2ttyb9a"/></g>`,
		"fallback": "andrsrxn:money-plus",
	});
}

export default Component;
