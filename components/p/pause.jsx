import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r69wl1bbx.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r69wl1bbx"/>`,
		"fallback": "iwwa:pause",
	});
}

export default Component;
