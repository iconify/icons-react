import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gv_aam95c.css';
import '../../css/l/lennyzbya.css';
import '../../css/m/m6htszb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gv_aam95c"/><path class="lennyzbya"/><path class="m6htszb9o"/></g>`,
		"fallback": "solar:videocamera-add-linear",
	});
}

export default Component;
