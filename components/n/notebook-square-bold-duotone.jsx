import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6yy04fix.css';
import '../../css/o/o4u834bpr.css';
import '../../css/a/avmk686_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6yy04fix"/><path class="o4u834bpr"/><path class="avmk686_u"/>`,
		"fallback": "solar:notebook-square-bold-duotone",
	});
}

export default Component;
