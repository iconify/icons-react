import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn6z1928b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn6z1928b"/>`,
		"fallback": "file-icons:slash",
	});
}

export default Component;
