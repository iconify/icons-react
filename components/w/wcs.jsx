import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw8x78bdo.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw8x78bdo"/>`,
		"fallback": "gis:wcs",
	});
}

export default Component;
