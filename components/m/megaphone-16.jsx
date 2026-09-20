import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4gg_shhu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4gg_shhu"/>`,
		"fallback": "qlementine-icons:megaphone-16",
	});
}

export default Component;
