import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6s21bb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6s21bb2i"/>`,
		"fallback": "withicons:warehouse-gloss",
	});
}

export default Component;
