import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5th8cr4z.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5th8cr4z"/>`,
		"fallback": "picon:tm",
	});
}

export default Component;
