import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d2lqw11bx.css';
import '../../css/f/fdhb8fb-x.css';
import '../../css/h/hsgg6j0lp.css';
import '../../css/m/m3mfq9x2i.css';
import '../../css/j/jgwm0beal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="d2lqw11bx"/><path class="fdhb8fb-x wm-s"/><path class="hsgg6j0lp wm-k"/><path class="m3mfq9x2i wm-a"/><path class="jgwm0beal wm-s"/></g>`,
		"fallback": "withicons-kawaii:sparkler",
	});
}

export default Component;
