import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok5q6j3op.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok5q6j3op"/>`,
		"fallback": "si:sign-in-duotone",
	});
}

export default Component;
