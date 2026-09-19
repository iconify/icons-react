import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whye44bxg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whye44bxg"/>`,
		"fallback": "carbon:temperature-water",
	});
}

export default Component;
