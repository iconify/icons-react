import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc03b0xex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc03b0xex"/>`,
		"fallback": "ri:omega",
	});
}

export default Component;
