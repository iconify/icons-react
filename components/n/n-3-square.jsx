import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_0mflbjs.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_0mflbjs"/>`,
		"fallback": "zmdi:n-3-square",
	});
}

export default Component;
