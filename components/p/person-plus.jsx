import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fv6k7p8vn.css';
import '../../css/t/tlzj7xbfp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fv6k7p8vn"/><path class="tlzj7xbfp"/></g>`,
		"fallback": "si-glyph:person-plus",
	});
}

export default Component;
