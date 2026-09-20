import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_64wx3zl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_64wx3zl"/>`,
		"fallback": "mdi:twitter-circle",
	});
}

export default Component;
