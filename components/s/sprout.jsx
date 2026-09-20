import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zizw0eb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zizw0eb5v"/>`,
		"fallback": "lucide:sprout",
	});
}

export default Component;
