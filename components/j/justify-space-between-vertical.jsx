import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sxlwlmkmh.css';
import '../../css/g/gr7fowzad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="sxlwlmkmh"/><path class="gr7fowzad"/></g>`,
		"fallback": "wordpress:justify-space-between-vertical",
	});
}

export default Component;
