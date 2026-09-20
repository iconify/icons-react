import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3uv7ib5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3uv7ib5z"/>`,
		"fallback": "thesvg-color:lucide",
	});
}

export default Component;
