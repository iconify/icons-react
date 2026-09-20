import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uniixcfaj.css';
import '../../css/j/jfon4t8dz.css';
import '../../css/s/sxde_bcdx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uniixcfaj"/><path class="jfon4t8dz"/><path class="sxde_bcdx"/></g>`,
		"fallback": "streamline-flex-color:phone-rotate-mobile",
	});
}

export default Component;
