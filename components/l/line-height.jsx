import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf4xj-bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf4xj-bbc"/>`,
		"fallback": "ri:line-height",
	});
}

export default Component;
