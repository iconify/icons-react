import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_w_xhb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_w_xhb-e"/>`,
		"fallback": "vadivam:shield-plus",
	});
}

export default Component;
