import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yais6jgsj.css';
import '../../css/a/afeqkmbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yais6jgsj"/><path vector-effect="non-scaling-stroke" class="afeqkmbls"/></g>`,
		"fallback": "wordpress:justify-space-between",
	});
}

export default Component;
