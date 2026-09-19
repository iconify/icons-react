import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dam6tqlqk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dam6tqlqk"/>`,
		"fallback": "fa7-solid:registered",
	});
}

export default Component;
