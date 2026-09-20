import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn9m6vbtd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn9m6vbtd"/>`,
		"fallback": "raphael:phone",
	});
}

export default Component;
