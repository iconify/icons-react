import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m14r7jbko.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m14r7jbko"/>`,
		"fallback": "f7:snow",
	});
}

export default Component;
