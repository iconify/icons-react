import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm2x8bcyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm2x8bcyt"/>`,
		"fallback": "ri:quote-text",
	});
}

export default Component;
