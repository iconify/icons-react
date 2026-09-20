import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bcf4y9b0p.css';
import '../../css/k/kwulblbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bcf4y9b0p"/><path class="kwulblbzp"/></g>`,
		"fallback": "lets-icons:navigate",
	});
}

export default Component;
