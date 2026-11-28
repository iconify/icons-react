import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4jqe6-xz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4jqe6-xz"/>`,
		"fallback": "iconaut:plant-pot-solid",
	});
}

export default Component;
