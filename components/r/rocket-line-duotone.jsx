import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f3oj9ibrq.css';
import '../../css/h/hmsxxdbnu.css';
import '../../css/i/icj9c585j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f3oj9ibrq"/><path class="hmsxxdbnu"/><path class="icj9c585j"/></g>`,
		"fallback": "solar:rocket-line-duotone",
	});
}

export default Component;
