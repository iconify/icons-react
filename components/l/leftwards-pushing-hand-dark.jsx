import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snwtadbgg.css';
import '../../css/i/ihcujbbik.css';
import '../../css/i/i__1hebsu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="snwtadbgg"/><path class="ihcujbbik"/><path class="i__1hebsu"/></g>`,
		"fallback": "fluent-emoji-flat:leftwards-pushing-hand-dark",
	});
}

export default Component;
