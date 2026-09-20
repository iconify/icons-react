import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu4l0sb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu4l0sb3i"/>`,
		"fallback": "mynaui:panel-bottom-inactive",
	});
}

export default Component;
