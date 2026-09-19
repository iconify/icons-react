import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iivdgsb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iivdgsb7w"/>`,
		"fallback": "bx:user",
	});
}

export default Component;
