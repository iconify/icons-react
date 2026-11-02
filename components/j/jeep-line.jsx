import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctv3cybom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctv3cybom"/>`,
		"fallback": "mingcute:jeep-line",
	});
}

export default Component;
