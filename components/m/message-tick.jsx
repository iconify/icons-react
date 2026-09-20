import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rky7wibpq.css';
import '../../css/t/tf03ofs8g.css';
import '../../css/p/p5e0pi07v.css';
import '../../css/x/xk1jz7llc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rky7wibpq"/><path class="tf03ofs8g"/><path class="p5e0pi07v"/><path class="xk1jz7llc"/></g>`,
		"fallback": "reicon:message-tick",
	});
}

export default Component;
