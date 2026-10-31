import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n051cfbkx.css';
import '../../css/c/chcthx55g.css';
import '../../css/z/zja9mv3nr.css';
import '../../css/u/utuopac-h.css';
import '../../css/o/om8rlzb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="n051cfbkx wm-shadow"/><path class="chcthx55g wm-shadow"/><path class="zja9mv3nr"/><path class="utuopac-h"/><path class="om8rlzb6h"/></g>`,
		"fallback": "withicons-brutal:user-round",
	});
}

export default Component;
