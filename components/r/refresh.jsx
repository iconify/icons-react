import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id7306wsv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id7306wsv"/>`,
		"fallback": "simple-line-icons:refresh",
	});
}

export default Component;
