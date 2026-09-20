import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5zif5b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5zif5b7o"/>`,
		"fallback": "thesvg-color:kaggle",
	});
}

export default Component;
