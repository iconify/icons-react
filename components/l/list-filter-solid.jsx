import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_fat9ykp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_fat9ykp"/>`,
		"fallback": "iconaut:list-filter-solid",
	});
}

export default Component;
