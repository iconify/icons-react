import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uztmj3dza.css';
import '../../css/m/mq4vs9bla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uztmj3dza"/><path class="mq4vs9bla"/></g>`,
		"fallback": "hugeicons:last-fm",
	});
}

export default Component;
