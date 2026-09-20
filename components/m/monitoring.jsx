import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmtqhdb5d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmtqhdb5d"/>`,
		"fallback": "ix:monitoring",
	});
}

export default Component;
