import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdxzjnb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdxzjnb8s"/>`,
		"fallback": "ri:single-quotes-r",
	});
}

export default Component;
