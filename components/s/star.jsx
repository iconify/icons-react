import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne3uqob6v.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne3uqob6v"/>`,
		"fallback": "fa6-regular:star",
	});
}

export default Component;
