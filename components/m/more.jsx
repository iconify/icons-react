import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d93mtf6nl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d93mtf6nl"/>`,
		"fallback": "uiw:more",
	});
}

export default Component;
