import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h62ykhuht.css';
import '../../css/n/ndi3unxmi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h62ykhuht"/><path class="ndi3unxmi"/></g>`,
		"fallback": "si-glyph:leaf",
	});
}

export default Component;
