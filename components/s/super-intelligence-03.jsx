import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c3i3g4b5r.css';
import '../../css/f/furvl8ujh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c3i3g4b5r"/><path class="furvl8ujh"/></g>`,
		"fallback": "hugeicons:super-intelligence-03",
	});
}

export default Component;
