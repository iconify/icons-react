import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhx2ux-1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhx2ux-1l"/>`,
		"fallback": "mdi:table-row-plus-after",
	});
}

export default Component;
