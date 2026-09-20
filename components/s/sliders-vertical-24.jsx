import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8opktd8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8opktd8u"/>`,
		"fallback": "qlementine-icons:sliders-vertical-24",
	});
}

export default Component;
