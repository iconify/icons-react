import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gp0egaclj.css';
import '../../css/o/o84q72yam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="gp0egaclj"/><path class="o84q72yam"/></g>`,
		"fallback": "solar:settings-line-duotone",
	});
}

export default Component;
