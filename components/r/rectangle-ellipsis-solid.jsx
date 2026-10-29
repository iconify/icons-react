import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu2bbhn-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu2bbhn-u"/>`,
		"fallback": "withicons:rectangle-ellipsis-solid",
	});
}

export default Component;
