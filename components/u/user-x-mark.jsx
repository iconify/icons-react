import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1tp18z4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1tp18z4u"/>`,
		"fallback": "sidekickicons:user-x-mark",
	});
}

export default Component;
