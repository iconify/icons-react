import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a9-iglbdi.css';
import '../../css/i/ibe-yt9mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a9-iglbdi"/><path class="ibe-yt9mi"/></g>`,
		"fallback": "streamline-sharp:phone-message",
	});
}

export default Component;
