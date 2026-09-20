import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt6iyeqqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt6iyeqqz"/>`,
		"fallback": "mingcute:rectangle-line",
	});
}

export default Component;
