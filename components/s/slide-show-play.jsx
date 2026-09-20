import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o2-q97b1m.css';
import '../../css/l/l4ickqxsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o2-q97b1m"/><path class="l4ickqxsa"/></g>`,
		"fallback": "streamline-sharp:slide-show-play",
	});
}

export default Component;
