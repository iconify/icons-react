import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xfsy1sb2g.css';
import '../../css/k/k8dfb1b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xfsy1sb2g"/><path class="k8dfb1b9j"/></g>`,
		"fallback": "hugeicons:joystick-02",
	});
}

export default Component;
