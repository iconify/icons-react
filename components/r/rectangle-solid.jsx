import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afl1-ubdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afl1-ubdq"/>`,
		"fallback": "mynaui:rectangle-solid",
	});
}

export default Component;
