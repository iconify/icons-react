import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nz26t1bjz.css';
import '../../css/g/gz9k5dbkr.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="nz26t1bjz"/><path class="gz9k5dbkr"/><circle class="h_tsn8bxt"/></g>`,
		"fallback": "lets-icons:money-light",
	});
}

export default Component;
