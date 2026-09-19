import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nqa194x4m.css';
import '../../css/d/dubsawgiu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nqa194x4m"/><path class="dubsawgiu"/></g>`,
		"fallback": "si-glyph:mail-has-mail",
	});
}

export default Component;
