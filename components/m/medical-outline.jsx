import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh6pq3bmw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh6pq3bmw"/>`,
		"fallback": "ion:medical-outline",
	});
}

export default Component;
