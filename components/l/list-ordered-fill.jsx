import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtn8ih8gz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtn8ih8gz"/>`,
		"fallback": "mingcute:list-ordered-fill",
	});
}

export default Component;
