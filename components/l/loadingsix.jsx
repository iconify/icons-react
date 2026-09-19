import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx6fch0-u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx6fch0-u"/>`,
		"fallback": "whh:loadingsix",
	});
}

export default Component;
