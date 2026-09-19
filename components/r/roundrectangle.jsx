import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfwm3nbse.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfwm3nbse"/>`,
		"fallback": "whh:roundrectangle",
	});
}

export default Component;
