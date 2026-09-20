import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig55-lw-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig55-lw-w"/>`,
		"fallback": "mynaui:mobile-signal-four-solid",
	});
}

export default Component;
