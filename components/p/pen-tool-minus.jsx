import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p9pv0vbyl.css';
import '../../css/f/fxex-8b8d.css';
import '../../css/g/g2bflsbhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p9pv0vbyl"/><path class="fxex-8b8d"/><path class="g2bflsbhg"/></g>`,
		"fallback": "hugeicons:pen-tool-minus",
	});
}

export default Component;
