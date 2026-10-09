import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruh8v-0xc.css';
import '../../css/e/eprzb-b7u.css';
import '../../css/r/r7o23obqg.css';
import '../../css/a/a21_wobxe.css';
import '../../css/q/ql5gy1bwo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruh8v-0xc"/><path class="eprzb-b7u"/><path class="r7o23obqg"/><path class="a21_wobxe"/><path class="ql5gy1bwo"/>`,
		"fallback": "energy-icons:led-20-bold",
	});
}

export default Component;
