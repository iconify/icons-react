import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u0r4_lj8o.css';
import '../../css/i/its440yfc.css';
import '../../css/u/ujgww1per.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u0r4_lj8o"/><path class="its440yfc"/><path class="ujgww1per"/></g>`,
		"fallback": "solar:loader-line-duotone",
	});
}

export default Component;
