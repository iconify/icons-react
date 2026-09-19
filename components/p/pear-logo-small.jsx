import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfgqo6zaq.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfgqo6zaq"/>`,
		"fallback": "dinkie-icons:pear-logo-small",
	});
}

export default Component;
