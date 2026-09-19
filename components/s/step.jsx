import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x65shebem.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x65shebem"/>`,
		"fallback": "gis:step",
	});
}

export default Component;
