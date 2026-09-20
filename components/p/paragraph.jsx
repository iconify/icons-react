import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bfgwr1ypm.css';
import '../../css/w/w6hh6lbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="bfgwr1ypm"/><path vector-effect="non-scaling-stroke" class="w6hh6lbvv"/></g>`,
		"fallback": "wordpress:paragraph",
	});
}

export default Component;
