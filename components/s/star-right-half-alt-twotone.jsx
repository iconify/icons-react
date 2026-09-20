import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5_car.css';
import '../../css/a/a0m25c.css';
import '../../css/c/c2m0_y.css';
import '../../css/v/vwcgvo.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-34.css';
import '../../css/s/so-from-16.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5_car"/><path class="a0m25c c2m0_y"/><path class="a0m25c vwcgvo"/>`,
		"fallback": "line-md:star-right-half-alt-twotone",
	});
}

export default Component;
