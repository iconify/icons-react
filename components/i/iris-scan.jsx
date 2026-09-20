import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aoy57sbik.css';
import '../../css/n/n55lvqpox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="aoy57sbik"/><path class="n55lvqpox"/></g>`,
		"fallback": "streamline-sharp:iris-scan",
	});
}

export default Component;
