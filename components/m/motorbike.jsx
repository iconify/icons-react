import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxg4r3bum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxg4r3bum"/>`,
		"fallback": "mynaui:motorbike",
	});
}

export default Component;
