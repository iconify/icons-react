import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st2ssyqcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st2ssyqcj"/>`,
		"fallback": "vadivam:message-square-text",
	});
}

export default Component;
