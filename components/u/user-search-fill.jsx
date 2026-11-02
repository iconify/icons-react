import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbn3dmb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbn3dmb4y"/>`,
		"fallback": "mingcute:user-search-fill",
	});
}

export default Component;
