import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvky0jspj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvky0jspj"/>`,
		"fallback": "tabler:tilt-shift",
	});
}

export default Component;
