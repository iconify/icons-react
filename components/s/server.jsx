import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjdee8b0l.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjdee8b0l"/>`,
		"fallback": "picon:server",
	});
}

export default Component;
