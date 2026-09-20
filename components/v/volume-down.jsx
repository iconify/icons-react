import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq5pb0owa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq5pb0owa"/>`,
		"fallback": "streamline:volume-down",
	});
}

export default Component;
