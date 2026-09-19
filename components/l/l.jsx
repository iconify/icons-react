import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjqcbzv4i.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjqcbzv4i"/>`,
		"fallback": "fa6-solid:l",
	});
}

export default Component;
