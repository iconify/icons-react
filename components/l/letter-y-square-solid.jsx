import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb658b_kg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb658b_kg"/>`,
		"fallback": "mynaui:letter-y-square-solid",
	});
}

export default Component;
