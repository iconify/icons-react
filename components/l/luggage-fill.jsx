import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxzs8xhit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxzs8xhit"/>`,
		"fallback": "mingcute:luggage-fill",
	});
}

export default Component;
