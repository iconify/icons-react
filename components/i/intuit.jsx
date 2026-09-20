import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-y9geb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-y9geb_l"/>`,
		"fallback": "thesvg-color:intuit",
	});
}

export default Component;
