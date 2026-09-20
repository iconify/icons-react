import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zogt6cb0c.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zogt6cb0c"/>`,
		"fallback": "oi:laptop",
	});
}

export default Component;
