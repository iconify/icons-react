import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3du-24zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3du-24zt"/>`,
		"fallback": "mingcute:layout-align-left-line",
	});
}

export default Component;
