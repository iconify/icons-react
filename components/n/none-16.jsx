import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z00ttnbsa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z00ttnbsa"/>`,
		"fallback": "qlementine-icons:none-16",
	});
}

export default Component;
