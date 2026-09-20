import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/njoqz0rdx.css';
import '../../css/v/v0ahp5bvo.css';
import '../../css/b/bxqirsbqf.css';
import '../../css/h/h8p6umnvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="njoqz0rdx"/><path class="v0ahp5bvo"/><path class="bxqirsbqf"/><path class="h8p6umnvc"/></g>`,
		"fallback": "reicon:screencast",
	});
}

export default Component;
