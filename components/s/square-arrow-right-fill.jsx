import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfry4lb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfry4lb_r"/>`,
		"fallback": "mingcute:square-arrow-right-fill",
	});
}

export default Component;
