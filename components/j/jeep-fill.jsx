import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-a60zbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-a60zbxi"/>`,
		"fallback": "mingcute:jeep-fill",
	});
}

export default Component;
