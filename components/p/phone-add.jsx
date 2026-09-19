import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqge86tid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqge86tid"/>`,
		"fallback": "iconoir:phone-add",
	});
}

export default Component;
