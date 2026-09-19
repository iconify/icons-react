import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m6p-05ntq.css';
import '../../css/a/a9w4vj6sj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m6p-05ntq"/><path class="a9w4vj6sj"/></g>`,
		"fallback": "glyphs:plane-arrival-duo",
	});
}

export default Component;
