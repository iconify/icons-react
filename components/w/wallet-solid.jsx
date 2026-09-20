import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0fa-2bpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0fa-2bpr"/>`,
		"fallback": "pixel:wallet-solid",
	});
}

export default Component;
