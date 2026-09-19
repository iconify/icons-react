import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e1t_zcbec.css';
import '../../css/q/qe8f45-ff.css';
import '../../css/z/z8dp_68if.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e1t_zcbec"/><path class="qe8f45-ff"/><path class="z8dp_68if"/></g>`,
		"fallback": "hugeicons:mars-stroke",
	});
}

export default Component;
