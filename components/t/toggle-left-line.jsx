import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp-ka5bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp-ka5bgf"/>`,
		"fallback": "mingcute:toggle-left-line",
	});
}

export default Component;
