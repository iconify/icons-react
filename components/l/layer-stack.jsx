import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlugsnb6c.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlugsnb6c"/>`,
		"fallback": "gis:layer-stack",
	});
}

export default Component;
