import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhox2tbaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhox2tbaw"/>`,
		"fallback": "griddy-icons:kitchen-tools",
	});
}

export default Component;
