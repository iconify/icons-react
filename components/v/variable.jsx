import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/og9sisiac.css';
import '../../css/f/f9bybebcd.css';
import '../../css/d/dsgdte86s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="og9sisiac"/><path class="f9bybebcd"/><path class="dsgdte86s"/></g>`,
		"fallback": "iconaut:variable",
	});
}

export default Component;
