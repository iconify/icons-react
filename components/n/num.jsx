import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnu2e1b5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnu2e1b5m"/>`,
		"fallback": "token:num",
	});
}

export default Component;
