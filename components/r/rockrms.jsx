import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyk16jb8z.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyk16jb8z"/>`,
		"fallback": "fa6-brands:rockrms",
	});
}

export default Component;
