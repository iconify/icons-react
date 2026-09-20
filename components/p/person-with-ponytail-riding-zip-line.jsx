import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0qr6z22v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0qr6z22v"/>`,
		"fallback": "pinhead:person-with-ponytail-riding-zip-line",
	});
}

export default Component;
