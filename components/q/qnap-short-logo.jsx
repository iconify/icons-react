import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osjc8_bbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osjc8_bbt"/>`,
		"fallback": "cbi:qnap-short-logo",
	});
}

export default Component;
