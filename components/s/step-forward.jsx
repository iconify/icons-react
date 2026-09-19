import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr8tbrt_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr8tbrt_i"/>`,
		"fallback": "fe:step-forward",
	});
}

export default Component;
