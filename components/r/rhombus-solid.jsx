import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dez_3qb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dez_3qb9a"/>`,
		"fallback": "mynaui:rhombus-solid",
	});
}

export default Component;
