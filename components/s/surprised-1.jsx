import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/e/e72cvwyxg.css';
import '../../css/f/fo4ccr_rl.css';
import '../../css/j/j5cb5ebxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="e72cvwyxg"/><path class="fo4ccr_rl"/><path class="j5cb5ebxi"/></g>`,
		"fallback": "tdesign:surprised-1",
	});
}

export default Component;
