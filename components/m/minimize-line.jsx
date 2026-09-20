import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r26g7nbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r26g7nbwd"/>`,
		"fallback": "majesticons:minimize-line",
	});
}

export default Component;
