import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzqk00u5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzqk00u5a"/>`,
		"fallback": "mingcute:layout-bottom-line",
	});
}

export default Component;
