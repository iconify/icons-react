import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xo-byvivj.css';
import '../../css/a/a5qjus6jt.css';
import '../../css/q/qdkjvlb1t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xo-byvivj"/><rect class="a5qjus6jt"/><path class="qdkjvlb1t"/></g>`,
		"fallback": "glyphs-poly:keyboard",
	});
}

export default Component;
