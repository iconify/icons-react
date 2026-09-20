import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj8aj-vuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj8aj-vuw"/>`,
		"fallback": "mynaui:ribbon-solid",
	});
}

export default Component;
