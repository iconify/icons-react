import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0du3hboe.css';
import '../../css/k/kw3akl4eq.css';
import '../../css/l/l_wahk1-s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a0du3hboe"/><path class="kw3akl4eq"/><path class="l_wahk1-s"/></g>`,
		"fallback": "glyphs:trophy-duo",
	});
}

export default Component;
