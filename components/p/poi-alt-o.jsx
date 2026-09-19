import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6y2cacwd.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6y2cacwd"/>`,
		"fallback": "gis:poi-alt-o",
	});
}

export default Component;
