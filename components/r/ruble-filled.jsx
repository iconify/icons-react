import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rzn7atb5s.css';
import '../../css/w/wippb3bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rzn7atb5s"/><path clip-rule="evenodd" class="wippb3bbj"/></g>`,
		"fallback": "reicon:ruble-filled",
	});
}

export default Component;
