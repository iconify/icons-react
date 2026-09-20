import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm9xzf3xr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm9xzf3xr"/>`,
		"fallback": "subway:massage-1",
	});
}

export default Component;
