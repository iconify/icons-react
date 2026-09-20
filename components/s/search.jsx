import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isk5td_we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isk5td_we"/>`,
		"fallback": "stash:search",
	});
}

export default Component;
