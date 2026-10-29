import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/okex9absk.css';
import '../../css/c/c6t4b7bfi.css';
import '../../css/v/vwzncsbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="okex9absk"/><path class="c6t4b7bfi wm-shadow"/><path class="vwzncsbmf"/></g>`,
		"fallback": "withicons:panel-right-engrave",
	});
}

export default Component;
