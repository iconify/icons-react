import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr6h3sp4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pr6h3sp4c"/>`,
		"fallback": "keyline-icons:smartphone-sharp-fill",
	});
}

export default Component;
