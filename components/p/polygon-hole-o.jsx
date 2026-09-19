import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8yu3ealr.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8yu3ealr"/>`,
		"fallback": "gis:polygon-hole-o",
	});
}

export default Component;
