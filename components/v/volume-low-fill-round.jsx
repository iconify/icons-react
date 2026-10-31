import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgp5_cbmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgp5_cbmu"/>`,
		"fallback": "coolicons:volume-low-fill-round",
	});
}

export default Component;
