import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c96ozvl4l.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c96ozvl4l"/>`,
		"fallback": "dinkie-icons:keycap-digit-seven-filled",
	});
}

export default Component;
