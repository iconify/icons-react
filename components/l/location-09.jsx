import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o9c4bdc6w.css';
import '../../css/f/frli32bnn.css';
import '../../css/l/ljd34hyaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o9c4bdc6w"/><path class="frli32bnn"/><path class="ljd34hyaq"/></g>`,
		"fallback": "hugeicons:location-09",
	});
}

export default Component;
