import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh6no0b8g.css';

const viewBox = {"width":36,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh6no0b8g"/>`,
		"fallback": "fontisto:paypal",
	});
}

export default Component;
