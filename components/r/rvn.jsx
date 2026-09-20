import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iefj8go1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iefj8go1e"/>`,
		"fallback": "token:rvn",
	});
}

export default Component;
