import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aij8cd1pi.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aij8cd1pi"/>`,
		"fallback": "picon:rfid",
	});
}

export default Component;
