import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn5yspb6x.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn5yspb6x"/>`,
		"fallback": "picon:shrine",
	});
}

export default Component;
