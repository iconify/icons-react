import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqm2czb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqm2czb7s"/>`,
		"fallback": "iconaut:pin-diagonal-solid",
	});
}

export default Component;
