import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lazrhbojf.css';

const viewBox = {"width":1664,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lazrhbojf"/>`,
		"fallback": "fa:quote-left",
	});
}

export default Component;
