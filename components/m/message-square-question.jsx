import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvkj3wbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvkj3wbey"/>`,
		"fallback": "noviair-light:message-square-question",
	});
}

export default Component;
