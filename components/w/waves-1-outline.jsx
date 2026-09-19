import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjk-g7bkf.css';
import '../../css/k/kchp85k6t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bjk-g7bkf"/><path class="kchp85k6t"/></g>`,
		"fallback": "glyphs:waves-1-outline",
	});
}

export default Component;
