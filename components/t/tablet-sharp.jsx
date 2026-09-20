import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3xfu_bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3xfu_bwc"/>`,
		"fallback": "pixelarticons:tablet-sharp",
	});
}

export default Component;
