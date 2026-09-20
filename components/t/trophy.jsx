import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gohqr0bjp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gohqr0bjp"/>`,
		"fallback": "simple-line-icons:trophy",
	});
}

export default Component;
