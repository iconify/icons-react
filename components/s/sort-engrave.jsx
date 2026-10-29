import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rnol45y_o.css';
import '../../css/a/a4hjggb0v.css';
import '../../css/k/k_zyttb9q.css';
import '../../css/z/zmx3w_bje.css';
import '../../css/l/lof7i1b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rnol45y_o wm-k"/><path class="a4hjggb0v wm-a"/><path class="k_zyttb9q wm-shadow"/><path class="wm-k zmx3w_bje"/><path class="lof7i1b0v wm-a"/></g>`,
		"fallback": "withicons:sort-engrave",
	});
}

export default Component;
