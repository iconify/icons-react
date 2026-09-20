import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q71v1jb4q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q71v1jb4q"/>`,
		"fallback": "pinhead:lion-and-exclamation-point",
	});
}

export default Component;
