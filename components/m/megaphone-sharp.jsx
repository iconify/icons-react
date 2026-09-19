import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixl6a-mcn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixl6a-mcn"/>`,
		"fallback": "ion:megaphone-sharp",
	});
}

export default Component;
