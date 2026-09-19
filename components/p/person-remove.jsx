import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hfwnmeb5w.css';
import '../../css/x/xq5oigb8v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hfwnmeb5w"/><path class="xq5oigb8v"/></g>`,
		"fallback": "si-glyph:person-remove",
	});
}

export default Component;
