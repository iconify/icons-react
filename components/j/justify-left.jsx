import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b0gad1x2v.css';
import '../../css/p/plxlnfhmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="b0gad1x2v"/><path class="plxlnfhmc"/></g>`,
		"fallback": "wordpress:justify-left",
	});
}

export default Component;
