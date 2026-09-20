import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/du_qk9urg.css';
import '../../css/f/fyja8cb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="du_qk9urg"/><path class="fyja8cb5b"/></g>`,
		"fallback": "streamline-sharp:translate-text",
	});
}

export default Component;
