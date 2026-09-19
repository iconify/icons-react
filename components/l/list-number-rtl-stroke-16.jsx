import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyb55sbsl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyb55sbsl"/>`,
		"fallback": "garden:list-number-rtl-stroke-16",
	});
}

export default Component;
