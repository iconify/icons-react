import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ija5sfmth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ija5sfmth"/>`,
		"fallback": "coolicons:shirt-bulk-round",
	});
}

export default Component;
