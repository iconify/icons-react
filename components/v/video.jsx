import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyquhxoxu.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyquhxoxu"/>`,
		"fallback": "oi:video",
	});
}

export default Component;
