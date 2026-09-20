import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etc7moi6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etc7moi6d"/>`,
		"fallback": "pixel:sitemap",
	});
}

export default Component;
