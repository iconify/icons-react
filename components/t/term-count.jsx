import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lai1y5_5e.css';
import '../../css/v/v0pht0ljf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="lai1y5_5e"/><path vector-effect="non-scaling-stroke" class="v0pht0ljf"/></g>`,
		"fallback": "wordpress:term-count",
	});
}

export default Component;
