import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liws21bxx.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liws21bxx"/>`,
		"fallback": "gis:location-arrow",
	});
}

export default Component;
