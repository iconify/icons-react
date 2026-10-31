import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/h/hzgo86vow.css';
import '../../css/z/zxpdqnyok.css';
import '../../css/h/hfjt53l_q.css';
import '../../css/j/jezvstdua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGB0C8rdwh" x1="7.74" x2="13.74" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGB0C8rdwh)" class="hzgo86vow"/><path class="wm-a zxpdqnyok"/><path class="hfjt53l_q wm-s"/><path class="jezvstdua wm-shine"/></g>`,
		"fallback": "withicons-utsav:mouse-pointer-click",
	});
}

export default Component;
