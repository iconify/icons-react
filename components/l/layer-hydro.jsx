import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w603acbjb.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w603acbjb"/>`,
		"fallback": "gis:layer-hydro",
	});
}

export default Component;
