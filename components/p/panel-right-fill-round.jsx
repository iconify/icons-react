import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y20p6kbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y20p6kbnd"/>`,
		"fallback": "coolicons:panel-right-fill-round",
	});
}

export default Component;
