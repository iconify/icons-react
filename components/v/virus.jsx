import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lrw3p1b1a.css';
import '../../css/e/e5db84qsw.css';
import '../../css/g/g-brd0vfh.css';
import '../../css/p/p8qto7xhh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lrw3p1b1a"/><rect class="e5db84qsw"/><rect class="g-brd0vfh"/><rect class="p8qto7xhh"/></g>`,
		"fallback": "glyphs-poly:virus",
	});
}

export default Component;
