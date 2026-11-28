import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaa1sl7cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaa1sl7cd"/>`,
		"fallback": "iconaut:mailbox-solid",
	});
}

export default Component;
