import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2in0hboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="j2in0hboi"/>`,
		"fallback": "boxicons:rectangle-wide-filled",
	});
}

export default Component;
