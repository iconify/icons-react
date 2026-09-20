import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npisey23r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npisey23r"/>`,
		"fallback": "pinhead:person-aiming-archery-bow",
	});
}

export default Component;
