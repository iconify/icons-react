import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vllpgtbvv.css';
import '../../css/y/yd1k4mbzu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vllpgtbvv"/><path class="yd1k4mbzu"/>`,
		"fallback": "ep:mouse",
	});
}

export default Component;
