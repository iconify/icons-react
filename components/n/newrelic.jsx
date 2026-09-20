import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvuewb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddvuewb9n"/>`,
		"fallback": "simple-icons:newrelic",
	});
}

export default Component;
