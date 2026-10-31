import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvhz7hd7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvhz7hd7i"/>`,
		"fallback": "vadivam:letter-v",
	});
}

export default Component;
