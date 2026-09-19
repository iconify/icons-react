import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyoqdrbia.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyoqdrbia"/>`,
		"fallback": "gis:step-o",
	});
}

export default Component;
