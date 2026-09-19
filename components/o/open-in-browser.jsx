import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2csaqbac.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2csaqbac"/>`,
		"fallback": "zmdi:open-in-browser",
	});
}

export default Component;
