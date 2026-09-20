import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq_i8y-mq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq_i8y-mq"/>`,
		"fallback": "mdi:printer-point-of-sale-plus-outline",
	});
}

export default Component;
