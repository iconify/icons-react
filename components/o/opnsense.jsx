import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phes-ab4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phes-ab4o"/>`,
		"fallback": "cbi:opnsense",
	});
}

export default Component;
