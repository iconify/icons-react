import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-wl_ebkk.css';
import '../../css/e/evcz0ub6l.css';
import '../../css/f/f0d7r7b-w.css';
import '../../css/h/hz7rcr3is.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-wl_ebkk"/><path class="evcz0ub6l"/><path class="f0d7r7b-w"/><path class="hz7rcr3is"/>`,
		"fallback": "fxemoji:tiger",
	});
}

export default Component;
