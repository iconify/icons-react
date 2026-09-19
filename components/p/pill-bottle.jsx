import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhnc_uboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhnc_uboz"/>`,
		"fallback": "boxicons:pill-bottle",
	});
}

export default Component;
