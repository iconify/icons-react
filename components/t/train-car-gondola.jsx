import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oedcq-3gq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oedcq-3gq"/>`,
		"fallback": "mdi:train-car-gondola",
	});
}

export default Component;
