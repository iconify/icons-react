import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v34184bjz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v34184bjz"/>`,
		"fallback": "fa7-solid:magnifying-glass-arrow-right",
	});
}

export default Component;
