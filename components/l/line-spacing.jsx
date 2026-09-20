import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxv-nlb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxv-nlb9z"/>`,
		"fallback": "uit:line-spacing",
	});
}

export default Component;
