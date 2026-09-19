import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otls4nbto.css';
import '../../css/n/n4id755jh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="otls4nbto"/><path class="n4id755jh"/></g>`,
		"fallback": "glyphs:kayak-bold",
	});
}

export default Component;
