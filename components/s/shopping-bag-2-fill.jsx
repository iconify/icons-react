import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak9rbxbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak9rbxbtp"/>`,
		"fallback": "ri:shopping-bag-2-fill",
	});
}

export default Component;
