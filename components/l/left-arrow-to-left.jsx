import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vek31jble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vek31jble"/>`,
		"fallback": "uil:left-arrow-to-left",
	});
}

export default Component;
