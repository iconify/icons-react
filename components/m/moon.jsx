import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd9e0jb9j.css';

const viewBox = {"width":384,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd9e0jb9j"/>`,
		"fallback": "ps:moon",
	});
}

export default Component;
