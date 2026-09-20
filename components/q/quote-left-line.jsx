import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiqpp9k5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiqpp9k5a"/>`,
		"fallback": "mingcute:quote-left-line",
	});
}

export default Component;
