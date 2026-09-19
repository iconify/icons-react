import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnr2jccom.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnr2jccom"/>`,
		"fallback": "gis:story-map",
	});
}

export default Component;
