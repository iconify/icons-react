import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5c1yxb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5c1yxb8l"/>`,
		"fallback": "withicons:more-vertical-solid",
	});
}

export default Component;
