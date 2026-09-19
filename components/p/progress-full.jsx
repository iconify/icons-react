import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqa938w4o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqa938w4o"/>`,
		"fallback": "entypo:progress-full",
	});
}

export default Component;
