import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a70ze4bvi.css';
import '../../css/f/fhl30ybcq.css';
import '../../css/t/trgl8vbcx.css';
import '../../css/j/j43fcpbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a70ze4bvi wm-shadow"/><path class="fhl30ybcq"/><path class="trgl8vbcx"/><path class="j43fcpbhp"/></g>`,
		"fallback": "withicons-retro:layers",
	});
}

export default Component;
