import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gzan0ibzy.css';
import '../../css/z/z30q42-xr.css';
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
		"content": `<g class="hntgybcog"><path class="gzan0ibzy"/><path class="z30q42-xr"/><path class="uoxjs6bit"/><path class="at_81ebpk"/></g>`,
		"fallback": "solar:swimming-linear",
	});
}

export default Component;
