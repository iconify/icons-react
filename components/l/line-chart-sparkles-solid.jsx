import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8_x0i1lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8_x0i1lv"/>`,
		"fallback": "iconaut:line-chart-sparkles-solid",
	});
}

export default Component;
