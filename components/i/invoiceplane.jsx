import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy2u80b4g.css';
import '../../css/k/kk1809b4e.css';
import '../../css/z/zcl8rmben.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy2u80b4g"/><path class="kk1809b4e"/><path class="zcl8rmben"/>`,
		"fallback": "selfhst:invoiceplane",
	});
}

export default Component;
