import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1dcnrbny.css';
import '../../css/m/mxhrgpioc.css';
import '../../css/k/kp8spwglh.css';
import '../../css/s/s4go6bbsx.css';
import '../../css/z/znu2mxbjn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1dcnrbny"/><path class="mxhrgpioc"/><path class="kp8spwglh"/><path class="s4go6bbsx"/><path class="znu2mxbjn"/>`,
		"fallback": "streamline-pixel:interface-essential-recycle",
	});
}

export default Component;
