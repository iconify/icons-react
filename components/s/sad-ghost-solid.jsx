import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqfe0qbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqfe0qbbj"/>`,
		"fallback": "mynaui:sad-ghost-solid",
	});
}

export default Component;
