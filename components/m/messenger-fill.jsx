import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icu7sb6yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icu7sb6yz"/>`,
		"fallback": "ri:messenger-fill",
	});
}

export default Component;
