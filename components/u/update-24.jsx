import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps8b1zbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps8b1zbgm"/>`,
		"fallback": "qlementine-icons:update-24",
	});
}

export default Component;
