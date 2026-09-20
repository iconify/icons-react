import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-umg8bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-umg8bbz"/>`,
		"fallback": "reicon:square-arrow-up2",
	});
}

export default Component;
