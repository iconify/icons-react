import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy32accpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy32accpe"/>`,
		"fallback": "mdi:receipt-text-remove",
	});
}

export default Component;
