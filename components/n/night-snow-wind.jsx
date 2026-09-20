import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbhm8ngkl.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbhm8ngkl"/>`,
		"fallback": "wi:night-snow-wind",
	});
}

export default Component;
