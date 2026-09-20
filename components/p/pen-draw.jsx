import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-4bf8boo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-4bf8boo"/>`,
		"fallback": "streamline-sharp-color:pen-draw",
	});
}

export default Component;
