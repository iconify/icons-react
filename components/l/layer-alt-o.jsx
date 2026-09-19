import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6oibxtkl.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6oibxtkl"/>`,
		"fallback": "gis:layer-alt-o",
	});
}

export default Component;
