import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8450_zvm.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8450_zvm"/>`,
		"fallback": "gis:square-pt",
	});
}

export default Component;
