import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v8oc18bcm.css';
import '../../css/c/cgy44m6jh.css';
import '../../css/u/unr76jbhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v8oc18bcm"/><path class="cgy44m6jh"/><path class="unr76jbhr"/></g>`,
		"fallback": "solar:slider-vertical-minimalistic-line-duotone",
	});
}

export default Component;
