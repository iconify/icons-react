import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjc4c_b7l.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjc4c_b7l"/>`,
		"fallback": "dinkie-icons:pear-logo-small-filled",
	});
}

export default Component;
