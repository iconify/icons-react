import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5pjqp23p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5pjqp23p"/>`,
		"fallback": "vadivam:users-collaboration",
	});
}

export default Component;
