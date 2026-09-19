import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shm6wfbvn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shm6wfbvn"/>`,
		"fallback": "glyphs:sort-amount-down",
	});
}

export default Component;
