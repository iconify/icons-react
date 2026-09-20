import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pphamlb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pphamlb1v"/>`,
		"fallback": "mynaui:mouse-pointer-click-solid",
	});
}

export default Component;
