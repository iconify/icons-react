import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnf2_ub3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnf2_ub3m"/>`,
		"fallback": "mynaui:map-pin-x-inside-solid",
	});
}

export default Component;
