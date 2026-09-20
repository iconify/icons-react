import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqi838r2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqi838r2c"/>`,
		"fallback": "mdi:invoice-import-outline",
	});
}

export default Component;
