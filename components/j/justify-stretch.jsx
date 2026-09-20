import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o-j4zoksj.css';
import '../../css/p/ptwlfrblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="o-j4zoksj"/><path class="ptwlfrblh"/></g>`,
		"fallback": "wordpress:justify-stretch",
	});
}

export default Component;
