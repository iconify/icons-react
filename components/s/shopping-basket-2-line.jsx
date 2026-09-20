import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly7e9mbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly7e9mbbt"/>`,
		"fallback": "ri:shopping-basket-2-line",
	});
}

export default Component;
