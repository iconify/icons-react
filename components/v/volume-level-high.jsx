import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/twvouabzm.css';
import '../../css/f/f4a2ii_0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="twvouabzm"/><path class="f4a2ii_0d"/></g>`,
		"fallback": "streamline-sharp:volume-level-high",
	});
}

export default Component;
