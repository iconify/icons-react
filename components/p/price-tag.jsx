import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_yuh5o2z.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_yuh5o2z"/>`,
		"fallback": "foundation:price-tag",
	});
}

export default Component;
