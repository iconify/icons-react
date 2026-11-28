import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc3w86psn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc3w86psn"/>`,
		"fallback": "iconaut:rotate-cw-solid",
	});
}

export default Component;
