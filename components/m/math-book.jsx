import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/edbboo-hy.css';
import '../../css/q/q4hhm4b9u.css';
import '../../css/f/ffwaozrbk.css';
import '../../css/t/tvtsiem6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="edbboo-hy"/><path class="q4hhm4b9u"/><path class="ffwaozrbk"/><path class="tvtsiem6g"/></g>`,
		"fallback": "iconoir:math-book",
	});
}

export default Component;
