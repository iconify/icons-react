import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl-e23r9x.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl-e23r9x"/>`,
		"fallback": "fad:modsquare",
	});
}

export default Component;
