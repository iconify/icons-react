import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8ymuly4o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8ymuly4o"/>`,
		"fallback": "simple-line-icons:symbol-female",
	});
}

export default Component;
