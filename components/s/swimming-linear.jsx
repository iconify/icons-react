import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yz9__bc6c.css';
import '../../css/v/v30dxydpm.css';
import '../../css/u/uoxjs6bit.css';
import '../../css/i/in-q1r46k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yz9__bc6c"/><path class="v30dxydpm"/><path class="uoxjs6bit"/><path class="in-q1r46k"/></g>`,
		"fallback": "solar:swimming-linear",
	});
}

export default Component;
