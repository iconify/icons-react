import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hptyw3s8b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hptyw3s8b"/>`,
		"fallback": "heroicons:sun-16-solid",
	});
}

export default Component;
