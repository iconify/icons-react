import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0eb80vhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0eb80vhx"/>`,
		"fallback": "mingcute:layout-11-line",
	});
}

export default Component;
