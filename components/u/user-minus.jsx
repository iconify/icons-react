import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue1jy4bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue1jy4bbg"/>`,
		"fallback": "mdi:user-minus",
	});
}

export default Component;
