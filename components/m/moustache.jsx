import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxn3cgkyv.css';

const viewBox = {"width":1024,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxn3cgkyv"/>`,
		"fallback": "whh:moustache",
	});
}

export default Component;
