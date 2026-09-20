import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv6bgb0wn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv6bgb0wn"/>`,
		"fallback": "pinhead:loaf-of-pan-bread",
	});
}

export default Component;
