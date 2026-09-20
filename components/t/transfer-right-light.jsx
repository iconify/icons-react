import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am88q0t7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am88q0t7t"/>`,
		"fallback": "lets-icons:transfer-right-light",
	});
}

export default Component;
