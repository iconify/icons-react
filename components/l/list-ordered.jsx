import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp6b1ub2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp6b1ub2q"/>`,
		"fallback": "lucide:list-ordered",
	});
}

export default Component;
