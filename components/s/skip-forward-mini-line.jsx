import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-4d03kxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-4d03kxj"/>`,
		"fallback": "ri:skip-forward-mini-line",
	});
}

export default Component;
