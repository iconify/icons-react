import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ev96uwiuv.css';
import '../../css/h/hbwohbcno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="ev96uwiuv"/><path vector-effect="non-scaling-stroke" class="hbwohbcno"/></g>`,
		"fallback": "wordpress:sides-top",
	});
}

export default Component;
