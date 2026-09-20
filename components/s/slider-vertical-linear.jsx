import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v8oc18bcm.css';
import '../../css/u/u4slpgvma.css';
import '../../css/h/h10et9qty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v8oc18bcm"/><path class="u4slpgvma"/><path class="h10et9qty"/></g>`,
		"fallback": "solar:slider-vertical-linear",
	});
}

export default Component;
