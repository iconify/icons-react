import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu6h-abma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu6h-abma"/>`,
		"fallback": "thesvg-color:reactos",
	});
}

export default Component;
