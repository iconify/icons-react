import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqk6_dbfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqk6_dbfe"/>`,
		"fallback": "mdi:sale-box-outline",
	});
}

export default Component;
