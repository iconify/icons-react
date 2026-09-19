import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogq1sfe1k.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogq1sfe1k"/>`,
		"fallback": "gis:location",
	});
}

export default Component;
