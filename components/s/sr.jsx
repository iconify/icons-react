import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7sy86bue.css';
import '../../css/o/ourbp8-tv.css';
import '../../css/u/u623cosgu.css';
import '../../css/y/yevzmiaai.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a7sy86bue"/><path class="ourbp8-tv"/><path class="u623cosgu"/><path class="yevzmiaai"/></g>`,
		"fallback": "cif:sr",
	});
}

export default Component;
