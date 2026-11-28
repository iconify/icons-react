import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-ou4dz9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-ou4dz9h"/>`,
		"fallback": "noviair:link",
	});
}

export default Component;
