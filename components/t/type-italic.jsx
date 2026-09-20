import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpi10xpow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpi10xpow"/>`,
		"fallback": "mynaui:type-italic",
	});
}

export default Component;
