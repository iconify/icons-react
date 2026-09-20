import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9fmcab0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9fmcab0k"/>`,
		"fallback": "mdi:tag-add",
	});
}

export default Component;
