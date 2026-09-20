import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c9-vhrxfv.css';
import '../../css/v/v0ahp5bvo.css';
import '../../css/k/ko7n8ubhw.css';
import '../../css/h/h8p6umnvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c9-vhrxfv"/><path class="v0ahp5bvo"/><path class="ko7n8ubhw"/><path class="h8p6umnvc"/></g>`,
		"fallback": "reicon:screencast-filled",
	});
}

export default Component;
