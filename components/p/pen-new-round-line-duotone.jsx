import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qairory2t.css';
import '../../css/f/fdn-zee6s.css';
import '../../css/c/c2w5vy0ny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qairory2t"/><path class="fdn-zee6s"/><path class="c2w5vy0ny"/></g>`,
		"fallback": "solar:pen-new-round-line-duotone",
	});
}

export default Component;
