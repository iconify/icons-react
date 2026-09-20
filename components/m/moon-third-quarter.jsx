import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jko8f0oqf.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jko8f0oqf"/>`,
		"fallback": "wi:moon-third-quarter",
	});
}

export default Component;
