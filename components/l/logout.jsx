import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qv4ebs0bg.css';
import '../../css/h/h1lupabnl.css';
import '../../css/h/hgoqu4bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qv4ebs0bg"/><path class="h1lupabnl"/><path class="hgoqu4bte"/></g>`,
		"fallback": "mage:logout",
	});
}

export default Component;
