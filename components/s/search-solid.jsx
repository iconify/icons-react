import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk-46wnbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk-46wnbu"/>`,
		"fallback": "mynaui:search-solid",
	});
}

export default Component;
