import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idk2wblek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idk2wblek"/>`,
		"fallback": "mingcute:star-line",
	});
}

export default Component;
