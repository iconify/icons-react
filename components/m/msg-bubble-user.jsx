import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h1xyzvb4l.css';
import '../../css/b/blphqos8l.css';
import '../../css/f/f1tqfuc1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h1xyzvb4l"/><circle class="blphqos8l"/><path class="f1tqfuc1r"/></g>`,
		"fallback": "reicon:msg-bubble-user",
	});
}

export default Component;
