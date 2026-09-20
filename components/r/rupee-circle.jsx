import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zya0c2bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zya0c2bkr"/>`,
		"fallback": "majesticons:rupee-circle",
	});
}

export default Component;
