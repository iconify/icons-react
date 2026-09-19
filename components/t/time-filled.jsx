import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faoq3ykkk.css';
import '../../css/d/d28ipjbsd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faoq3ykkk"/><path class="d28ipjbsd"/>`,
		"fallback": "carbon:time-filled",
	});
}

export default Component;
