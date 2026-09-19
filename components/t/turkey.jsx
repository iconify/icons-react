import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sncxhqtvf.css';
import '../../css/g/guh5wacdp.css';
import '../../css/u/uz2atsbfp.css';
import '../../css/n/nxnzyp7-y.css';
import '../../css/z/zrgvg3jbb.css';
import '../../css/i/izq5u0bzt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sncxhqtvf"/><path class="guh5wacdp"/><path class="uz2atsbfp"/><path class="nxnzyp7-y"/><circle transform="rotate(35.072 38.356 7.483)" class="zrgvg3jbb"/><circle transform="rotate(35.072 40.81 9.206)" class="izq5u0bzt"/></g>`,
		"fallback": "icon-park:turkey",
	});
}

export default Component;
