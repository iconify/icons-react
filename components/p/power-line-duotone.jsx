import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aus5fob7s.css';
import '../../css/h/hg2ix5s9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aus5fob7s"/><path class="hg2ix5s9t"/></g>`,
		"fallback": "solar:power-line-duotone",
	});
}

export default Component;
