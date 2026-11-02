import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw1dwtm4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw1dwtm4a"/>`,
		"fallback": "mingcute:minus-circle-line",
	});
}

export default Component;
