import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xfsy1sb2g.css';
import '../../css/h/hi7t25b6s.css';
import '../../css/o/osq3z8b5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xfsy1sb2g"/><path class="hi7t25b6s"/><path class="osq3z8b5l"/></g>`,
		"fallback": "hugeicons:joystick-05",
	});
}

export default Component;
