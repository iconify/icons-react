import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/npzvbmzqb.css';
import '../../css/z/z_atyxbme.css';
import '../../css/c/c0i0twi8u.css';
import '../../css/w/waqwo82tt.css';
import '../../css/y/y3kk9abim.css';
import '../../css/b/bm242m5tg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="npzvbmzqb"/><path class="z_atyxbme"/><path class="c0i0twi8u"/><path class="waqwo82tt"/><path class="y3kk9abim"/><path class="bm242m5tg"/></g>`,
		"fallback": "streamline-color:star-badge",
	});
}

export default Component;
