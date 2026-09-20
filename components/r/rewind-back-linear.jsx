import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zl7s07b0n.css';
import '../../css/m/mhkx4mb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zl7s07b0n"/><path class="mhkx4mb1l"/></g>`,
		"fallback": "solar:rewind-back-linear",
	});
}

export default Component;
