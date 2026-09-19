import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs8k-2cze.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs8k-2cze"/>`,
		"fallback": "el:view-mode",
	});
}

export default Component;
