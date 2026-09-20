import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pp77qjbwg.css';
import '../../css/q/qinvizbyq.css';
import '../../css/t/tkx6_bb7v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pp77qjbwg"/><path class="qinvizbyq"/><path class="tkx6_bb7v"/></g>`,
		"fallback": "streamline-color:parachute-drop-flat",
	});
}

export default Component;
