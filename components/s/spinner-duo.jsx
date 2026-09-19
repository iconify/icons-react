import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gepcfxmyh.css';
import '../../css/l/lw8hkmb8c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gepcfxmyh"/><path class="lw8hkmb8c"/></g>`,
		"fallback": "glyphs:spinner-duo",
	});
}

export default Component;
