import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dawcsab1j.css';
import '../../css/n/n0f0bgy_u.css';
import '../../css/y/yjjy4ebaw.css';
import '../../css/w/wu5o4370d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dawcsab1j"/><path class="n0f0bgy_u"/><path class="yjjy4ebaw"/><path class="wu5o4370d"/></g>`,
		"fallback": "hugeicons:square-circle",
	});
}

export default Component;
