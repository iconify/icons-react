import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/p/p6kbvpbcp.css';
import '../../css/q/q30v3zb4k.css';
import '../../css/m/mkr00buly.css';
import '../../css/z/ziph1wdel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="p6kbvpbcp"/><path class="q30v3zb4k"/><path class="mkr00buly"/><path class="ziph1wdel"/></g>`,
		"fallback": "streamline-sharp-color:mine-cart-2",
	});
}

export default Component;
