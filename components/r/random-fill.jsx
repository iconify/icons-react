import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfca5tesk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfca5tesk"/>`,
		"fallback": "mingcute:random-fill",
	});
}

export default Component;
