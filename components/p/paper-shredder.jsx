import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/prax9_bmi.css';
import '../../css/g/g8i_fbple.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="prax9_bmi"/><path class="g8i_fbple"/></g>`,
		"fallback": "si-glyph:paper-shredder",
	});
}

export default Component;
