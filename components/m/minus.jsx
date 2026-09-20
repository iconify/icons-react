import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gejxqd72u.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gejxqd72u"/>`,
		"fallback": "oi:minus",
	});
}

export default Component;
