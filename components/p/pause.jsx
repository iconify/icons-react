import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnnnnzvbc.css';

const viewBox = {"width":18,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnnnnzvbc"/>`,
		"fallback": "fontisto:pause",
	});
}

export default Component;
