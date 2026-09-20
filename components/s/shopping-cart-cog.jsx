import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nnzq1t7sf.css';
import '../../css/c/cjks9wb_u.css';
import '../../css/p/p_yg6qb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nnzq1t7sf"/><path class="cjks9wb_u"/><path class="p_yg6qb5s"/></g>`,
		"fallback": "tabler:shopping-cart-cog",
	});
}

export default Component;
