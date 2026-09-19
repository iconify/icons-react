import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zo0jdhbwq.css';
import '../../css/d/dgi3ajoxw.css';
import '../../css/f/feccq4bff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zo0jdhbwq"/><path class="dgi3ajoxw"/><path class="feccq4bff"/></g>`,
		"fallback": "hugeicons:ipod",
	});
}

export default Component;
