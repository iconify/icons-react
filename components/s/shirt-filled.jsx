import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug5nw9bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug5nw9bdl"/>`,
		"fallback": "lucide-extended:shirt-filled",
	});
}

export default Component;
