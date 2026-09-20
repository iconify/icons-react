import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0w92xe9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0w92xe9v"/>`,
		"fallback": "mynaui:telephone-missed",
	});
}

export default Component;
