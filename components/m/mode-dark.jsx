import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzjp_-b9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzjp_-b9c"/>`,
		"fallback": "iconamoon:mode-dark",
	});
}

export default Component;
