import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrks0fbpf.css';
import '../../css/u/uzenndbsu.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/n8gu1ebhy.css';
import '../../css/g/ggejuoeif.css';
import '../../css/r/rtf2g_g6d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrks0fbpf"/><path class="uzenndbsu"/><g class="jn8qy4bru"><path class="n8gu1ebhy"/><path class="ggejuoeif"/><path class="rtf2g_g6d"/></g>`,
		"fallback": "openmoji:potable-water",
	});
}

export default Component;
