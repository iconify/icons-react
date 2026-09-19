import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgqz75b6s.css';
import '../../css/v/vn5koxb8k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wgqz75b6s"/><path class="vn5koxb8k"/></g>`,
		"fallback": "glyphs:kick-scooter-duo",
	});
}

export default Component;
