import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iea6d-aqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iea6d-aqd"/>`,
		"fallback": "mingcute:list-check-2-line",
	});
}

export default Component;
