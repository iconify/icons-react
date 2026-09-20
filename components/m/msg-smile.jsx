import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cl5cx4bic.css';
import '../../css/s/sb5-xofsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cl5cx4bic"/><path class="sb5-xofsm"/></g>`,
		"fallback": "reicon:msg-smile",
	});
}

export default Component;
