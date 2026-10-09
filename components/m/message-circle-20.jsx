import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jed2ayb2m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jed2ayb2m"/>`,
		"fallback": "energy-icons:message-circle-20",
	});
}

export default Component;
