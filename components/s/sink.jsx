import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up6v01b5s.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up6v01b5s"/>`,
		"fallback": "picon:sink",
	});
}

export default Component;
