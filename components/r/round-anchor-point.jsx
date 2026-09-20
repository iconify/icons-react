import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bwfefv7qk.css';
import '../../css/r/re8btit-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bwfefv7qk"/><path class="re8btit-p"/></g>`,
		"fallback": "streamline-sharp:round-anchor-point",
	});
}

export default Component;
