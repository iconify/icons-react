import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnb6j5bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnb6j5bsx"/>`,
		"fallback": "mingcute:settings-5-fill",
	});
}

export default Component;
