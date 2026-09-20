import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow7rous6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow7rous6z"/>`,
		"fallback": "thesvg-color:tldraw",
	});
}

export default Component;
