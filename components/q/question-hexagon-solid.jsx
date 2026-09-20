import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa1unaboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa1unaboj"/>`,
		"fallback": "mynaui:question-hexagon-solid",
	});
}

export default Component;
