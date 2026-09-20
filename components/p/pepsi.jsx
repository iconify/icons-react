import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvviu06qs.css';
import '../../css/w/wc7y-bc1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvviu06qs"/><path class="wc7y-bc1h"/>`,
		"fallback": "lineicons:pepsi",
	});
}

export default Component;
