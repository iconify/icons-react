import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mkbzfbcab.css';
import '../../css/a/a4hjggb0v.css';
import '../../css/v/vuzeqx4xo.css';
import '../../css/u/u315dy91q.css';
import '../../css/l/lof7i1b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mkbzfbcab wm-k"/><path class="a4hjggb0v wm-a"/><path class="vuzeqx4xo wm-shadow"/><path class="u315dy91q wm-k"/><path class="lof7i1b0v wm-a"/></g>`,
		"fallback": "withicons:sort-alpha-engrave",
	});
}

export default Component;
