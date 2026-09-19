import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6rqk4blh.css';
import '../../css/r/ru1qjebin.css';
import '../../css/j/jshgl_dcu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6rqk4blh"/><path class="ru1qjebin"/><path class="jshgl_dcu"/>`,
		"fallback": "fxemoji:turnedokhand",
	});
}

export default Component;
