import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asc_5xb_m.css';

const viewBox = {"width":512,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asc_5xb_m"/>`,
		"fallback": "whh:textcursor",
	});
}

export default Component;
