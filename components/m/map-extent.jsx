import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7l3pbb-c.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7l3pbb-c"/>`,
		"fallback": "gis:map-extent",
	});
}

export default Component;
