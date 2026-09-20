import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilpcvfb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilpcvfb9n"/>`,
		"fallback": "lucide:touchpad-off",
	});
}

export default Component;
