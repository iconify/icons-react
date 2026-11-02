import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjf-5bbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjf-5bbta"/>`,
		"fallback": "mingcute:ufo-2-line",
	});
}

export default Component;
