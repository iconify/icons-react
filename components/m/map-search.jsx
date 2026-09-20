import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/on7w3rb0g.css';
import '../../css/p/pw0x2ebwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="on7w3rb0g"/><path class="pw0x2ebwc"/></g>`,
		"fallback": "streamline-sharp:map-search",
	});
}

export default Component;
