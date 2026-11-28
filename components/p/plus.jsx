import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch550_68c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch550_68c"/>`,
		"fallback": "noviair-light:plus",
	});
}

export default Component;
