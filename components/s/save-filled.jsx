import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vuknt_jto.css';
import '../../css/y/y3tf-nwmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vuknt_jto"/><path class="y3tf-nwmj"/></g>`,
		"fallback": "reicon:save-filled",
	});
}

export default Component;
