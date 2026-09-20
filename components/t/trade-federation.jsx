import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmw063b4e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmw063b4e"/>`,
		"fallback": "la:trade-federation",
	});
}

export default Component;
