import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5muhfx1s.css';
import '../../css/m/md286fbip.css';
import '../../css/z/z2q6q0i8u.css';
import '../../css/h/had8mlbwn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="c5muhfx1s"/><g class="md286fbip"><path class="z2q6q0i8u"/><path class="had8mlbwn"/></g></g>`,
		"fallback": "cryptocurrency-color:ray",
	});
}

export default Component;
