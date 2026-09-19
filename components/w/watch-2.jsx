import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8rdw4bir.css';
import '../../css/s/sr5o87afn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u8rdw4bir"/><rect class="sr5o87afn"/></g>`,
		"fallback": "glyphs-poly:watch-2",
	});
}

export default Component;
