import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoqk-f2dc.css';
import '../../css/i/ixj_x3vjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoqk-f2dc"/><path class="ixj_x3vjp"/>`,
		"fallback": "solar:shield-keyhole-bold-duotone",
	});
}

export default Component;
