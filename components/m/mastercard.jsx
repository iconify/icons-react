import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_e7l-b5g.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_e7l-b5g"/>`,
		"fallback": "whh:mastercard",
	});
}

export default Component;
