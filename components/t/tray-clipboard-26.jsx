import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6e5nze2t.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6e5nze2t"/>`,
		"fallback": "garden:tray-clipboard-26",
	});
}

export default Component;
