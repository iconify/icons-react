import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h20o-8bsr.css';
import '../../css/m/mb7553tox.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h20o-8bsr"/><path class="mb7553tox"/>`,
		"fallback": "foundation:social-foursquare",
	});
}

export default Component;
