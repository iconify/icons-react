import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foiahqp_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foiahqp_i"/>`,
		"fallback": "mingcute:siri-frame-line",
	});
}

export default Component;
