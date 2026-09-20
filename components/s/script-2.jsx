import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl3z94bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl3z94bis"/>`,
		"fallback": "proicons:script-2",
	});
}

export default Component;
