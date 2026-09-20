import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc9-v5b7t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc9-v5b7t"/>`,
		"fallback": "pinhead:sub-sandwich-with-steam",
	});
}

export default Component;
