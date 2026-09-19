import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mgteurj5l.css';
import '../../css/h/hupbp2dcz.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mgteurj5l"/><path class="hupbp2dcz"/></g>`,
		"fallback": "si-glyph:moon-star",
	});
}

export default Component;
