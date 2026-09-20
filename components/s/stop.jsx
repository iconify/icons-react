import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz1of_bkk.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz1of_bkk"/>`,
		"fallback": "picon:stop",
	});
}

export default Component;
