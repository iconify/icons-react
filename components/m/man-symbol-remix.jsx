import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czh092b_z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="czh092b_z"/>`,
		"fallback": "streamline:man-symbol-remix",
	});
}

export default Component;
