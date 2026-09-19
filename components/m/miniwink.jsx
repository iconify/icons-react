import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-cf82kwn.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-cf82kwn"/>`,
		"fallback": "whh:miniwink",
	});
}

export default Component;
