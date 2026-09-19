import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5wz4ttdq.css';

const viewBox = {"width":1024,"height":897};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5wz4ttdq"/>`,
		"fallback": "whh:teddybear",
	});
}

export default Component;
