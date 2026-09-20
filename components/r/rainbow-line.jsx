import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yarw-nzsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yarw-nzsy"/>`,
		"fallback": "ri:rainbow-line",
	});
}

export default Component;
