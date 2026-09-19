import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxmemdtnq.css';
import '../../css/a/az7opmutd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxmemdtnq"/><path class="az7opmutd"/>`,
		"fallback": "circum:mobile-3",
	});
}

export default Component;
