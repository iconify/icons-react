import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7rg5yowr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7rg5yowr"/>`,
		"fallback": "at-icons:trophy",
	});
}

export default Component;
