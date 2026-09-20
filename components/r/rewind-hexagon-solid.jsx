import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f69awrboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f69awrboo"/>`,
		"fallback": "mynaui:rewind-hexagon-solid",
	});
}

export default Component;
