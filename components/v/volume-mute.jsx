import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j82ay1b8f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j82ay1b8f"/>`,
		"fallback": "carbon:volume-mute",
	});
}

export default Component;
