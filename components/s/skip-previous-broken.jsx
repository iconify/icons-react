import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o38rzofgs.css';
import '../../css/g/gtjvk1txz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o38rzofgs"/><path class="gtjvk1txz"/></g>`,
		"fallback": "solar:skip-previous-broken",
	});
}

export default Component;
