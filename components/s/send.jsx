import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lai0ygbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lai0ygbzt"/>`,
		"fallback": "token:send",
	});
}

export default Component;
