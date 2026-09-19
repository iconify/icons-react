import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t3egng3nj.css';
import '../../css/f/fvjkl3bdy.css';
import '../../css/x/xu433-xqn.css';
import '../../css/q/qlupu-beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t3egng3nj"/><path class="fvjkl3bdy"/><path class="xu433-xqn"/><path class="qlupu-beq"/></g>`,
		"fallback": "covid:vaccine-protection-face-mask-2",
	});
}

export default Component;
