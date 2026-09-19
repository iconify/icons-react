import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4rbfsbwr.css';
import '../../css/l/lil4qobow.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z4rbfsbwr"/><path class="lil4qobow"/></g>`,
		"fallback": "glyphs-poly:watch-1",
	});
}

export default Component;
