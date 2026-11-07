import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zob7utbzb.css';
import '../../css/t/tmnt0-fuj.css';
import '../../css/u/uoxjs6bit.css';
import '../../css/a/at_81ebpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zob7utbzb"/><path class="tmnt0-fuj"/><path class="uoxjs6bit"/><path class="at_81ebpk"/></g>`,
		"fallback": "solar:swimming-line-duotone",
	});
}

export default Component;
