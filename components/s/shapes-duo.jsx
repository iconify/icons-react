import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h5nvtzbus.css';
import '../../css/a/amf-28b0w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h5nvtzbus"/><path class="amf-28b0w"/></g>`,
		"fallback": "glyphs:shapes-duo",
	});
}

export default Component;
