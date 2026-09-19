import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8sxjdyuk.css';
import '../../css/l/lbmk4dbws.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u8sxjdyuk"/><path class="lbmk4dbws"/></g>`,
		"fallback": "glyphs:signal-4-duo",
	});
}

export default Component;
