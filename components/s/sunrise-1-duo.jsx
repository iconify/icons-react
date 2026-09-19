import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5q_dxbtp.css';
import '../../css/v/vuwc0pbtq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c5q_dxbtp"/><path class="vuwc0pbtq"/></g>`,
		"fallback": "glyphs:sunrise-1-duo",
	});
}

export default Component;
