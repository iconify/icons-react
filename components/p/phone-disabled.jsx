import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvi8pxblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvi8pxblc"/>`,
		"fallback": "iconoir:phone-disabled",
	});
}

export default Component;
