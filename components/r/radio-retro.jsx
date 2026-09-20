import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qy376nbqu.css';
import '../../css/c/cqn7qhbtn.css';
import '../../css/d/dodex1-eg.css';
import '../../css/w/wedvm7bgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qy376nbqu"/><path class="cqn7qhbtn"/><path class="dodex1-eg"/><path class="wedvm7bgt"/></g>`,
		"fallback": "streamline-ultimate:radio-retro",
	});
}

export default Component;
