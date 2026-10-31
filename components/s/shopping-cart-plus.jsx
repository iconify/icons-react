import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/asvg_owdu.css';
import '../../css/s/ssfpmpzhf.css';
import '../../css/j/jzrn2slps.css';
import '../../css/m/m2rusw92g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="asvg_owdu wm-shadow"/><path class="ssfpmpzhf wm-shadow"/><path class="jzrn2slps"/><path class="m2rusw92g"/></g>`,
		"fallback": "withicons-brutal:shopping-cart-plus",
	});
}

export default Component;
