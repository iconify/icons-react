import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsjkxfbnr.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsjkxfbnr"/>`,
		"fallback": "dinkie-icons:left-magnifying-glass-small-filled",
	});
}

export default Component;
