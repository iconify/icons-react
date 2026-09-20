import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar93k-zbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar93k-zbu"/>`,
		"fallback": "tabler:scribble",
	});
}

export default Component;
