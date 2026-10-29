import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqj8zfbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqj8zfbuw"/>`,
		"fallback": "withicons:minus",
	});
}

export default Component;
