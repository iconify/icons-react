import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev35-acdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev35-acdk"/>`,
		"fallback": "mingcute:sunset-line",
	});
}

export default Component;
