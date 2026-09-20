import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atusk1b4s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atusk1b4s"/>`,
		"fallback": "pinhead:pixel-burger-on-bun",
	});
}

export default Component;
