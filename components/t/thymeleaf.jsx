import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyd4a7czl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyd4a7czl"/>`,
		"fallback": "simple-icons:thymeleaf",
	});
}

export default Component;
