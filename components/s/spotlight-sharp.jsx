import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9q1w35vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9q1w35vn"/>`,
		"fallback": "pixelarticons:spotlight-sharp",
	});
}

export default Component;
