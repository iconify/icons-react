import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eugvkacpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eugvkacpp"/>`,
		"fallback": "ri:t-shirt-air-line",
	});
}

export default Component;
