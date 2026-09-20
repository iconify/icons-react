import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x__3-1tlm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x__3-1tlm"/>`,
		"fallback": "thesvg-color:virgin",
	});
}

export default Component;
