import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c230y1g7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c230y1g7h"/>`,
		"fallback": "griddy-icons:undo",
	});
}

export default Component;
