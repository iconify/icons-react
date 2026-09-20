import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjew7nbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjew7nbsm"/>`,
		"fallback": "keyline-icons:pen-off-sharp",
	});
}

export default Component;
