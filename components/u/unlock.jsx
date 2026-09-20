import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tekvm-b2x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tekvm-b2x"/>`,
		"fallback": "raphael:unlock",
	});
}

export default Component;
