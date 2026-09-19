import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7m296b3k.css';

const viewBox = {"width":562,"height":867};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7m296b3k"/>`,
		"fallback": "ls:q",
	});
}

export default Component;
