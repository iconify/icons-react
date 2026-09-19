import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn_x48p1y.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn_x48p1y"/>`,
		"fallback": "dinkie-icons:nerd-face",
	});
}

export default Component;
