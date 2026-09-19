import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9j2k-0au.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9j2k-0au"/>`,
		"fallback": "fa7-solid:square-pen",
	});
}

export default Component;
