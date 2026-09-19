import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfgqhlq6c.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfgqhlq6c"/>`,
		"fallback": "fad:unlock",
	});
}

export default Component;
