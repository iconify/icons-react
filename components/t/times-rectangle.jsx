import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6h-p980a.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6h-p980a"/>`,
		"fallback": "fa:times-rectangle",
	});
}

export default Component;
