import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfbn8ab0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xfbn8ab0v"/>`,
		"fallback": "basil:notification-solid",
	});
}

export default Component;
