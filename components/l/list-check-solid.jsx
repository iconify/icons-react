import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j79n9n5fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j79n9n5fp"/>`,
		"fallback": "mynaui:list-check-solid",
	});
}

export default Component;
