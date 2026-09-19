import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7-k33srk.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7-k33srk"/>`,
		"fallback": "gis:union",
	});
}

export default Component;
