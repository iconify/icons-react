import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rvqyg9-3a.css';
import '../../css/i/iyfsh3b1l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rvqyg9-3a"/><path class="iyfsh3b1l"/></g>`,
		"fallback": "glyphs:ruler-trinangle-duo",
	});
}

export default Component;
