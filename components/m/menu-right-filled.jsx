import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp95aoe_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp95aoe_n"/>`,
		"fallback": "boxicons:menu-right-filled",
	});
}

export default Component;
