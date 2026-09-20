import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g2h_fsbyf.css';
import '../../css/u/u57g-w_pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g2h_fsbyf"/><path class="u57g-w_pq"/></g>`,
		"fallback": "streamline-sharp:skull-2",
	});
}

export default Component;
