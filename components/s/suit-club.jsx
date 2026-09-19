import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjm8lsc9b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjm8lsc9b"/>`,
		"fallback": "bi:suit-club",
	});
}

export default Component;
