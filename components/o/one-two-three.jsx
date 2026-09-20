import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr9h2wbbu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr9h2wbbu"/>`,
		"fallback": "pinhead:one-two-three",
	});
}

export default Component;
