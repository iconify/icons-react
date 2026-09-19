import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j79x-vugx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j79x-vugx"/>`,
		"fallback": "fa7-regular:thumbs-down",
	});
}

export default Component;
