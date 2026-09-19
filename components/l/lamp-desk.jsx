import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gk76gpujr.css';
import '../../css/s/sitli9irb.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gk76gpujr"/><path class="sitli9irb"/></g>`,
		"fallback": "si-glyph:lamp-desk",
	});
}

export default Component;
