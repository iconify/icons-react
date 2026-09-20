import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em-2je60d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em-2je60d"/>`,
		"fallback": "pixelarticons:volume-x-solid",
	});
}

export default Component;
