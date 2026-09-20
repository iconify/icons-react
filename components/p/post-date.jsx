import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gi87txbdj.css';
import '../../css/h/hdcm3gbmg.css';
import '../../css/y/ymly3jbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="gi87txbdj"/><path vector-effect="non-scaling-stroke" class="hdcm3gbmg"/><path vector-effect="non-scaling-stroke" class="ymly3jbab"/></g>`,
		"fallback": "wordpress:post-date",
	});
}

export default Component;
