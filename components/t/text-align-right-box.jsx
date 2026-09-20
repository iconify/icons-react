import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-9m9rnsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-9m9rnsc"/>`,
		"fallback": "pixelarticons:text-align-right-box",
	});
}

export default Component;
