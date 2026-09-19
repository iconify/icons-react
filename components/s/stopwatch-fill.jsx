import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jusstw7zf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jusstw7zf"/>`,
		"fallback": "f7:stopwatch-fill",
	});
}

export default Component;
