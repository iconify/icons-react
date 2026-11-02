import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va7zxrbnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va7zxrbnt"/>`,
		"fallback": "mingcute:planet-line",
	});
}

export default Component;
