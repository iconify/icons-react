import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/elph5ybyo.css';
import '../../css/k/kjs__f0kv.css';
import '../../css/e/e6zwirbum.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="elph5ybyo"/><path class="kjs__f0kv"/><path class="e6zwirbum"/></g>`,
		"fallback": "si-glyph:money-3",
	});
}

export default Component;
