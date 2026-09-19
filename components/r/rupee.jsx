import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8oie8bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8oie8bbx"/>`,
		"fallback": "hugeicons:rupee",
	});
}

export default Component;
