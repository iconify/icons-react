import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l400bnd5u.css';
import '../../css/h/h1trbxoxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l400bnd5u"/><path class="h1trbxoxh"/></g>`,
		"fallback": "proicons:road-cone",
	});
}

export default Component;
