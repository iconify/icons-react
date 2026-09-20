import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvjq8_bqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvjq8_bqx"/>`,
		"fallback": "ri:loader-3-fill",
	});
}

export default Component;
