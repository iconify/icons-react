import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-34vlb0v.css';
import '../../css/t/t38at1bzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-34vlb0v"/><path class="t38at1bzr"/>`,
		"fallback": "boxicons:shekel-filled",
	});
}

export default Component;
