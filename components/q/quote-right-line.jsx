import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkukhop6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkukhop6t"/>`,
		"fallback": "mingcute:quote-right-line",
	});
}

export default Component;
