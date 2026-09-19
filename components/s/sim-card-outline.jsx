import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gq8lmn-fl.css';
import '../../css/w/w4k4oubkq.css';
import '../../css/e/eitjcwufr.css';
import '../../css/o/on3a9747h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gq8lmn-fl"/><path class="w4k4oubkq"/><path class="eitjcwufr"/><path class="on3a9747h"/></g>`,
		"fallback": "glyphs:sim-card-outline",
	});
}

export default Component;
