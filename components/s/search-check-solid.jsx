import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyu8vtd1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyu8vtd1o"/>`,
		"fallback": "iconaut:search-check-solid",
	});
}

export default Component;
