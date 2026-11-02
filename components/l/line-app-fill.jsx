import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okjh_kbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okjh_kbci"/>`,
		"fallback": "mingcute:line-app-fill",
	});
}

export default Component;
