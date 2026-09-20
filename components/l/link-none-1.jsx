import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb3zy6b5p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb3zy6b5p"/>`,
		"fallback": "radix-icons:link-none-1",
	});
}

export default Component;
