import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rga5cev3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rga5cev3h"/>`,
		"fallback": "coolicons:square-chevron-double-down-round",
	});
}

export default Component;
