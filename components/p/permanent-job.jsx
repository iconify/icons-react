import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z2cemcb1p.css';
import '../../css/b/badaaobgc.css';
import '../../css/f/feq4-_9im.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z2cemcb1p"/><path class="badaaobgc"/><path class="feq4-_9im"/></g>`,
		"fallback": "hugeicons:permanent-job",
	});
}

export default Component;
