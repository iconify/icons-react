import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waq0mlnar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waq0mlnar"/>`,
		"fallback": "mingcute:user-setting-fill",
	});
}

export default Component;
