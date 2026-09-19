import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgy167gpl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgy167gpl"/>`,
		"fallback": "fa7-solid:sitemap",
	});
}

export default Component;
