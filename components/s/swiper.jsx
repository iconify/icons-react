import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz1f_bc-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz1f_bc-w"/>`,
		"fallback": "thesvg-color:swiper",
	});
}

export default Component;
