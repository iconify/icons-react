import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr5sybb7w.css';
import '../../css/c/cdhe4sbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr5sybb7w"/><path class="cdhe4sbui"/>`,
		"fallback": "solar:skip-next-bold-duotone",
	});
}

export default Component;
