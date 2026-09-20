import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsh1hrhbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsh1hrhbj"/>`,
		"fallback": "mynaui:letter-g-square-solid",
	});
}

export default Component;
