import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz_d1jkgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz_d1jkgn"/>`,
		"fallback": "boxicons:t-shirt-filled",
	});
}

export default Component;
