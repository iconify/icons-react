import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-t7k5nxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-t7k5nxf"/>`,
		"fallback": "lucide:send",
	});
}

export default Component;
