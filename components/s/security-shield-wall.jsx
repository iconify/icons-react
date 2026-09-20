import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8eh7n5jh.css';
import '../../css/j/j7h15zsik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d8eh7n5jh"/><path class="j7h15zsik"/>`,
		"fallback": "streamline-freehand:security-shield-wall",
	});
}

export default Component;
