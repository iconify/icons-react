import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh6xk1tzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh6xk1tzx"/>`,
		"fallback": "mdi:nutrition",
	});
}

export default Component;
