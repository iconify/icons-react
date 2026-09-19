import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/t/tj32edcvs.css';
import '../../css/o/ocjb12a3h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="tj32edcvs"/><rect class="ocjb12a3h"/></g>`,
		"fallback": "glyphs-poly:toggle-2",
	});
}

export default Component;
