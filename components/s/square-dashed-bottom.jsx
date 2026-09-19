import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2xiccb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2xiccb0t"/>`,
		"fallback": "hugeicons:square-dashed-bottom",
	});
}

export default Component;
