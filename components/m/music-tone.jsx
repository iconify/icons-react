import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhf0vfbha.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhf0vfbha"/>`,
		"fallback": "simple-line-icons:music-tone",
	});
}

export default Component;
