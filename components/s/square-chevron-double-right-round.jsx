import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwntdc4ov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwntdc4ov"/>`,
		"fallback": "coolicons:square-chevron-double-right-round",
	});
}

export default Component;
