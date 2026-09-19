import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a26dkh2yf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a26dkh2yf"/>`,
		"fallback": "ci:spotify",
	});
}

export default Component;
