import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s68rhqbhc.css';
import '../../css/j/jt3vpacjn.css';
import '../../css/h/h2u6jfbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s68rhqbhc"/><path class="jt3vpacjn"/><path class="h2u6jfbzo"/></g>`,
		"fallback": "hugeicons:prescription",
	});
}

export default Component;
