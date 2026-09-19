import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxh3rob4u.css';

const viewBox = {"width":1536,"height":1760};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxh3rob4u"/>`,
		"fallback": "fa:shirtsinbulk",
	});
}

export default Component;
