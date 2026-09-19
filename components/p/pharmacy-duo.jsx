import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/idjkkl0cj.css';
import '../../css/w/w5rhok_0r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="idjkkl0cj"/><path class="w5rhok_0r"/></g>`,
		"fallback": "glyphs:pharmacy-duo",
	});
}

export default Component;
