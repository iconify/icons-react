import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhgchhb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhgchhb1f"/>`,
		"fallback": "mynaui:rewind-square-solid",
	});
}

export default Component;
