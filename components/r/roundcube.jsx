import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oow8v9byd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oow8v9byd"/>`,
		"fallback": "whh:roundcube",
	});
}

export default Component;
