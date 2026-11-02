import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfyx4o23a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfyx4o23a"/>`,
		"fallback": "mingcute:playground-line",
	});
}

export default Component;
