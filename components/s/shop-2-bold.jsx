import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mabbh-bhm.css';
import '../../css/a/afkb6ib-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mabbh-bhm"/><path class="afkb6ib-h"/></g>`,
		"fallback": "solar:shop-2-bold",
	});
}

export default Component;
