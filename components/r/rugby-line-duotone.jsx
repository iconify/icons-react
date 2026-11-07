import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nb77v-bco.css';
import '../../css/s/s00s7jole.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nb77v-bco"/><path class="s00s7jole"/></g>`,
		"fallback": "solar:rugby-line-duotone",
	});
}

export default Component;
