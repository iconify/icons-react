import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izblc5huz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izblc5huz"/>`,
		"fallback": "fa7-solid:tablets",
	});
}

export default Component;
