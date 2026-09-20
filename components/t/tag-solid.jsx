import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_1x8qb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_1x8qb6b"/>`,
		"fallback": "mynaui:tag-solid",
	});
}

export default Component;
