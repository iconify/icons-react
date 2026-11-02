import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir-d2rb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir-d2rb5x"/>`,
		"fallback": "mingcute:passport-fill",
	});
}

export default Component;
