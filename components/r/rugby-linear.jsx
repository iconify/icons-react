import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nb77v-bco.css';
import '../../css/h/hlm5fkb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nb77v-bco"/><path class="hlm5fkb9j"/></g>`,
		"fallback": "solar:rugby-linear",
	});
}

export default Component;
