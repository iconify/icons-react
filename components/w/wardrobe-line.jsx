import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqsu-ibjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqsu-ibjh"/>`,
		"fallback": "mingcute:wardrobe-line",
	});
}

export default Component;
