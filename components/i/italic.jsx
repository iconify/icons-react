import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ickf4xswo.css';

const viewBox = {"width":15,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ickf4xswo"/>`,
		"fallback": "fontisto:italic",
	});
}

export default Component;
