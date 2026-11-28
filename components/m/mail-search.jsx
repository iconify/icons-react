import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afp2ygi9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afp2ygi9c"/>`,
		"fallback": "noviair-light:mail-search",
	});
}

export default Component;
