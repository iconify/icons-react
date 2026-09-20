import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js4f3kb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js4f3kb5w"/>`,
		"fallback": "mynaui:sad-square-solid",
	});
}

export default Component;
