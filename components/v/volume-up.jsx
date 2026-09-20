import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mviidac3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mviidac3c"/>`,
		"fallback": "typcn:volume-up",
	});
}

export default Component;
