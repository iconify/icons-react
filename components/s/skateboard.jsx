import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-_3mcbkz.css';
import '../../css/v/vikdu2bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-_3mcbkz"/><path class="vikdu2bvn"/>`,
		"fallback": "boxicons:skateboard",
	});
}

export default Component;
