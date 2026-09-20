import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrw0g7hrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrw0g7hrq"/>`,
		"fallback": "ri:t-shirt-air-fill",
	});
}

export default Component;
