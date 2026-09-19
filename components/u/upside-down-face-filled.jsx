import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq289ebot.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq289ebot"/>`,
		"fallback": "dinkie-icons:upside-down-face-filled",
	});
}

export default Component;
