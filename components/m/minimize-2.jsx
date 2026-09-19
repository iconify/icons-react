import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv5n3jbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv5n3jbhl"/>`,
		"fallback": "circum:minimize-2",
	});
}

export default Component;
