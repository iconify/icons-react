import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vyzc02u8i.css';
import '../../css/t/t16arpq7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vyzc02u8i"/><path class="t16arpq7c"/></g>`,
		"fallback": "hugeicons:target-dollar",
	});
}

export default Component;
