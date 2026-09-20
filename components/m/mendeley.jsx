import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd6dz4ezu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd6dz4ezu"/>`,
		"fallback": "la:mendeley",
	});
}

export default Component;
