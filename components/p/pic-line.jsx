import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p068o5acv.css';
import '../../css/f/f-iag6myh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p068o5acv"/><path class="f-iag6myh"/>`,
		"fallback": "mingcute:pic-line",
	});
}

export default Component;
