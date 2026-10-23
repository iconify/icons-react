import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt-hzv5tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt-hzv5tk"/>`,
		"fallback": "vadivam:keyboard",
	});
}

export default Component;
