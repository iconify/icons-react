import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hllcan98u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hllcan98u"/>`,
		"fallback": "simple-line-icons:lock-open",
	});
}

export default Component;
