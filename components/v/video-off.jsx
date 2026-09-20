import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljwd1_bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljwd1_bic"/>`,
		"fallback": "mynaui:video-off",
	});
}

export default Component;
