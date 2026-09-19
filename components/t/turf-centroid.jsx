import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xezhn6bls.css';
import '../../css/o/oxb1cbk0h.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xezhn6bls"/><path class="oxb1cbk0h"/>`,
		"fallback": "geo:turf-centroid",
	});
}

export default Component;
