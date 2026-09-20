import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v509occvb.css';
import '../../css/w/w3ftdbw8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="v509occvb"/><path class="w3ftdbw8y"/></g>`,
		"fallback": "wordpress:stretch-full-width",
	});
}

export default Component;
