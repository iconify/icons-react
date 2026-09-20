import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohsi8t-cv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohsi8t-cv"/>`,
		"fallback": "pixelarticons:send",
	});
}

export default Component;
