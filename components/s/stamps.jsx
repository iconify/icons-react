import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q70s55boh.css';
import '../../css/p/pn53utzvz.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q70s55boh"/><path class="pn53utzvz"/></g>`,
		"fallback": "si-glyph:stamps",
	});
}

export default Component;
