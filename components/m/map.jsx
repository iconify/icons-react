import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0dav7bkc.css';

const viewBox = {"width":717,"height":637};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0dav7bkc"/>`,
		"fallback": "ls:map",
	});
}

export default Component;
