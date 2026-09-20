import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6l-sicok.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6l-sicok"/>`,
		"fallback": "pinhead:octagon-outline",
	});
}

export default Component;
