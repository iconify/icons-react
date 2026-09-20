import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm3y6d_0y.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm3y6d_0y"/>`,
		"fallback": "picon:ltr",
	});
}

export default Component;
