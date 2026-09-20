import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4gcwsb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4gcwsb0g"/>`,
		"fallback": "mingcute:tower-crane-line",
	});
}

export default Component;
