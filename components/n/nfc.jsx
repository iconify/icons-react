import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iafu0tbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iafu0tbcu"/>`,
		"fallback": "noviair-light:nfc",
	});
}

export default Component;
