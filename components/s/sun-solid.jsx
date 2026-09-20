import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3q760j9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d3q760j9z"/>`,
		"fallback": "streamline-sharp:sun-solid",
	});
}

export default Component;
