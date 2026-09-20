import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaxtr4zwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaxtr4zwy"/>`,
		"fallback": "mdi:set-right",
	});
}

export default Component;
