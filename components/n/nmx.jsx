import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3wqznb4l.css';
import '../../css/d/d4j9nrbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3wqznb4l"/><path class="d4j9nrbeu"/>`,
		"fallback": "token:nmx",
	});
}

export default Component;
