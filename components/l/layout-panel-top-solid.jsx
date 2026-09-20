import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymr08vb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymr08vb0v"/>`,
		"fallback": "mynaui:layout-panel-top-solid",
	});
}

export default Component;
