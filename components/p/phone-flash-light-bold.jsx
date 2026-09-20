import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r41gwzhxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r41gwzhxy"/>`,
		"fallback": "streamline-ultimate:phone-flash-light-bold",
	});
}

export default Component;
