import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq9h4pbcf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq9h4pbcf"/>`,
		"fallback": "ion:send-outline",
	});
}

export default Component;
