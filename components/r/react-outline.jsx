import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/bbpy9nbbh.css';
import '../../css/z/zz0yp4bhr.css';
import '../../css/n/n6ytud-wm.css';
import '../../css/t/t308wjbmr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="bbpy9nbbh"/><path class="zz0yp4bhr"/><path class="n6ytud-wm"/><path class="t308wjbmr"/></g>`,
		"fallback": "teenyicons:react-outline",
	});
}

export default Component;
