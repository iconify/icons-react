import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ip5zz346n.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/a/amz4nuz8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ip5zz346n"/><circle class="dtl23o_xq"/><path class="amz4nuz8q"/></g>`,
		"fallback": "solar:user-block-line-duotone",
	});
}

export default Component;
