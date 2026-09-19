import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxsr6dk8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxsr6dk8j"/>`,
		"fallback": "hugeicons:message-cancel-01",
	});
}

export default Component;
