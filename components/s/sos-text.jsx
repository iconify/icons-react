import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unsv5v4cm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unsv5v4cm"/>`,
		"fallback": "pinhead:sos-text",
	});
}

export default Component;
