import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t51t1vv5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t51t1vv5e"/>`,
		"fallback": "tdesign:wallet-filled",
	});
}

export default Component;
