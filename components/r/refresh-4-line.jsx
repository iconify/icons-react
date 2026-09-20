import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn6o2rb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn6o2rb_e"/>`,
		"fallback": "mingcute:refresh-4-line",
	});
}

export default Component;
