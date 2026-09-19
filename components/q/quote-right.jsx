import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hijq5lfhd.css';

const viewBox = {"width":1664,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hijq5lfhd"/>`,
		"fallback": "fa:quote-right",
	});
}

export default Component;
