import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ch09qbfwl.css';
import '../../css/b/bcoq-rbfh.css';
import '../../css/h/habi4zc9x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ch09qbfwl"/><path class="bcoq-rbfh"/><path class="habi4zc9x"/></g>`,
		"fallback": "glyphs:tennis-ball-duo",
	});
}

export default Component;
