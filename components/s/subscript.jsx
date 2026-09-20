import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vqc2u-btk.css';
import '../../css/v/vex34rbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="vqc2u-btk"/><path vector-effect="non-scaling-stroke" class="vex34rbzc"/></g>`,
		"fallback": "wordpress:subscript",
	});
}

export default Component;
