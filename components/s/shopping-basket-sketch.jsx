import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c-ef78b2g.css';
import '../../css/k/ky74_dbht.css';
import '../../css/k/kgfhzmbhl.css';
import '../../css/t/t_1vhibtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c-ef78b2g wm-k"/><path class="ky74_dbht wm-a"/><path class="kgfhzmbhl wm-k"/><path class="t_1vhibtu wm-a"/></g>`,
		"fallback": "withicons:shopping-basket-sketch",
	});
}

export default Component;
