import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctl0kjb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctl0kjb_u"/>`,
		"fallback": "ri:list-radio",
	});
}

export default Component;
