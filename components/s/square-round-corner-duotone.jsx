import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmfepibel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmfepibel primary"/>`,
		"fallback": "iconaut:square-round-corner-duotone",
	});
}

export default Component;
