import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwlfc3bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwlfc3bdk"/>`,
		"fallback": "coolicons:letter-a-fill-round",
	});
}

export default Component;
