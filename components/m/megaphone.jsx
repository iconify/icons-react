import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsb0x-bvb.css';
import '../../css/q/q5st0_sjt.css';
import '../../css/e/ex6kq6bjn.css';
import '../../css/k/khx7cwb3l.css';
import '../../css/e/ewm16cc7d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsb0x-bvb"/><path class="q5st0_sjt"/><path class="ex6kq6bjn"/><path class="khx7cwb3l"/><path class="ewm16cc7d"/>`,
		"fallback": "fxemoji:megaphone",
	});
}

export default Component;
