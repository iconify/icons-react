import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cufkv7bqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cufkv7bqe"/>`,
		"fallback": "boxicons:laurel-wreath-right",
	});
}

export default Component;
