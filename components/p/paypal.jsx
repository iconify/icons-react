import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fezhcwz_j.css';

const viewBox = {"width":456,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fezhcwz_j"/>`,
		"fallback": "ps:paypal",
	});
}

export default Component;
