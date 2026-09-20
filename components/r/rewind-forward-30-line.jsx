import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjn112btq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjn112btq"/>`,
		"fallback": "mingcute:rewind-forward-30-line",
	});
}

export default Component;
