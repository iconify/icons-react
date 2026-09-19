import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h2crudbxo.css';
import '../../css/a/a4clfcbdg.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h2crudbxo"/><path class="a4clfcbdg"/></g>`,
		"fallback": "si-glyph:triangle-double-arrow-down",
	});
}

export default Component;
