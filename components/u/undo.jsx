import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7ri-jboo.css';

const viewBox = {"width":583,"height":716};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7ri-jboo"/>`,
		"fallback": "ls:undo",
	});
}

export default Component;
