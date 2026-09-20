import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/h/hwsal5q-o.css';
import '../../css/v/vi-85-brg.css';
import '../../css/f/f4tt_yjqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="hwsal5q-o"/><path class="vi-85-brg"/><path class="f4tt_yjqh"/></g>`,
		"fallback": "lets-icons:time-sleep-light",
	});
}

export default Component;
