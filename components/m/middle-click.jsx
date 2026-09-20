import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wn3i1h2cj.css';
import '../../css/o/o5udrp96x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wn3i1h2cj"/><path class="o5udrp96x"/></g>`,
		"fallback": "streamline-sharp:middle-click",
	});
}

export default Component;
