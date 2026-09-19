import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/i/i2a_bx_0y.css';
import '../../css/l/lafzqbmme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="i2a_bx_0y"/><path class="lafzqbmme"/></g>`,
		"fallback": "humbleicons:volume-1",
	});
}

export default Component;
