import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaw8b26al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaw8b26al"/>`,
		"fallback": "mingcute:rewind-forward-square-10-line",
	});
}

export default Component;
