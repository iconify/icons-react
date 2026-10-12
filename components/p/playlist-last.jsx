import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffuho1b6v.css';
import '../../css/n/n_b95b1an.css';
import '../../css/d/dfnua36xv.css';
import '../../css/y/y-8edmb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 21.58 13.63)" class="ffuho1b6v"/><path class="n_b95b1an"/><rect transform="rotate(90 21.58 13.63)" class="dfnua36xv"/><path class="y-8edmb2c"/></g>`,
		"fallback": "andrsrxn:playlist-last",
	});
}

export default Component;
