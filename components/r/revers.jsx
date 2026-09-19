import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_dabbeqx.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_dabbeqx"/>`,
		"fallback": "gis:revers",
	});
}

export default Component;
