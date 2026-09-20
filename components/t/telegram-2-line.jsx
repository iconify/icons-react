import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uda9etbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uda9etbff"/>`,
		"fallback": "ri:telegram-2-line",
	});
}

export default Component;
