import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mgp-8ebvh.css';
import '../../css/j/j8tzfdcno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mgp-8ebvh"/><path class="j8tzfdcno"/></g>`,
		"fallback": "reicon:message-favorite",
	});
}

export default Component;
