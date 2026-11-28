import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzunbmz8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzunbmz8d"/>`,
		"fallback": "iconaut:square-function-solid",
	});
}

export default Component;
