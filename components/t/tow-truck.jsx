import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nso-06b-q.css';
import '../../css/z/zf0gdub7b.css';
import '../../css/b/bouo_5bdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nso-06b-q"/><path class="zf0gdub7b"/><path class="bouo_5bdo"/></g>`,
		"fallback": "hugeicons:tow-truck",
	});
}

export default Component;
