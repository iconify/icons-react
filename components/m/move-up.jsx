import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otgl_qb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otgl_qb9b"/>`,
		"fallback": "lucide:move-up",
	});
}

export default Component;
