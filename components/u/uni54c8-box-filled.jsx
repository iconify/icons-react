import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdqkzx6-c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdqkzx6-c"/>`,
		"fallback": "dinkie-icons:uni54c8-box-filled",
	});
}

export default Component;
