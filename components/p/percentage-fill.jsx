import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svgpb476e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svgpb476e"/>`,
		"fallback": "mingcute:percentage-fill",
	});
}

export default Component;
