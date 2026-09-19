import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdyizyb3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdyizyb3e"/>`,
		"fallback": "famicons:notifications-off-circle-sharp",
	});
}

export default Component;
