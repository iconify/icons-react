import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi7s_kbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi7s_kbou"/>`,
		"fallback": "mynaui:tent-solid",
	});
}

export default Component;
