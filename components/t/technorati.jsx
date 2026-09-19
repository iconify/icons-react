import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q__-3obnv.css';

const viewBox = {"width":1024,"height":1013};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q__-3obnv"/>`,
		"fallback": "whh:technorati",
	});
}

export default Component;
