import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/plsbgcb9p.css';
import '../../css/s/sy77_e04s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="plsbgcb9p"/><path class="sy77_e04s"/></g>`,
		"fallback": "streamline-sharp:water-drop",
	});
}

export default Component;
