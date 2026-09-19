import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/f/fi_edld4q.css';
import '../../css/j/jh5ifwous.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="fi_edld4q"/><path class="jh5ifwous"/></g>`,
		"fallback": "glyphs:monitor-bold",
	});
}

export default Component;
