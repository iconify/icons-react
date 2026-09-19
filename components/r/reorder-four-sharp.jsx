import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia11uwb_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia11uwb_x"/>`,
		"fallback": "ion:reorder-four-sharp",
	});
}

export default Component;
