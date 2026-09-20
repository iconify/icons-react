import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht5kbo4uh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht5kbo4uh"/>`,
		"fallback": "la:screwdriver-solid",
	});
}

export default Component;
