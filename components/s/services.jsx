import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxfi2jb7a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxfi2jb7a"/>`,
		"fallback": "icons8:services",
	});
}

export default Component;
