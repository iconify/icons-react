import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj0k-5wrv.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj0k-5wrv"/>`,
		"fallback": "gis:layer-o",
	});
}

export default Component;
