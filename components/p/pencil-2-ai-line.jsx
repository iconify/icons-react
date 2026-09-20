import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et3dy0ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et3dy0ben"/>`,
		"fallback": "mingcute:pencil-2-ai-line",
	});
}

export default Component;
