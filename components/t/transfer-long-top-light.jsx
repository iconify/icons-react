import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qervw3b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qervw3b_t"/>`,
		"fallback": "lets-icons:transfer-long-top-light",
	});
}

export default Component;
