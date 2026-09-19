import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p_3hnybns.css';
import '../../css/i/ip_dwfb1g.css';
import '../../css/m/mrawmjblw.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(4)" class="n1lsf0bnc"><ellipse class="p_3hnybns"/><path class="ip_dwfb1g"/><ellipse class="mrawmjblw"/></g>`,
		"fallback": "si-glyph:louder-2",
	});
}

export default Component;
