import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px7vqjbck.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px7vqjbck"/>`,
		"fallback": "streamline:party-popper",
	});
}

export default Component;
