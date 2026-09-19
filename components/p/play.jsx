import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji8osbb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji8osbb5l"/>`,
		"fallback": "fe:play",
	});
}

export default Component;
