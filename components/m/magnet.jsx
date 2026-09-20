import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzssdl34u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzssdl34u"/>`,
		"fallback": "simple-line-icons:magnet",
	});
}

export default Component;
