import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enmzxhb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enmzxhb6o"/>`,
		"fallback": "pixelarticons:repeat-1",
	});
}

export default Component;
