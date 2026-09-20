import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qe0f4-bqw.css';
import '../../css/k/k4-hxfybp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qe0f4-bqw"/><path class="k4-hxfybp"/></g>`,
		"fallback": "reicon:sofa2-filled",
	});
}

export default Component;
