import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd707hsrn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd707hsrn"/>`,
		"fallback": "simple-line-icons:puzzle",
	});
}

export default Component;
