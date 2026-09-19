import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujdi-5u_i.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujdi-5u_i"/>`,
		"fallback": "gis:layer-alt",
	});
}

export default Component;
