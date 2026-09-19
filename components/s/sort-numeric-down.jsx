import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4gttkb5z.css';
import '../../css/p/px4c0dbsn.css';
import '../../css/f/fbpyyfbwu.css';
import '../../css/b/bg2yi7zyc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d4gttkb5z"/><path class="px4c0dbsn"/><path class="fbpyyfbwu"/><path class="bg2yi7zyc"/></g>`,
		"fallback": "glyphs-poly:sort-numeric-down",
	});
}

export default Component;
