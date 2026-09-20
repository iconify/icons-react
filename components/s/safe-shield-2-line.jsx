import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzo92ltrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzo92ltrr"/>`,
		"fallback": "mingcute:safe-shield-2-line",
	});
}

export default Component;
