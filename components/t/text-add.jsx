import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsb9exiyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsb9exiyc"/>`,
		"fallback": "pixelarticons:text-add",
	});
}

export default Component;
