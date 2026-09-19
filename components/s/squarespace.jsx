import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7w5snbsj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7w5snbsj"/>`,
		"fallback": "file-icons:squarespace",
	});
}

export default Component;
