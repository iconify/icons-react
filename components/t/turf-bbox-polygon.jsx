import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqs9uef3x.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqs9uef3x"/>`,
		"fallback": "geo:turf-bbox-polygon",
	});
}

export default Component;
