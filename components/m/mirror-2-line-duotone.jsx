import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qeqbmq_7c.css';
import '../../css/y/yr_co9bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qeqbmq_7c"/><path class="yr_co9bxk"/></g>`,
		"fallback": "solar:mirror-2-line-duotone",
	});
}

export default Component;
