import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xay_q6mqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xay_q6mqz"/>`,
		"fallback": "mdi:leaf-circle-outline",
	});
}

export default Component;
