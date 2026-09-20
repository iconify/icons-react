import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xf22utbom.css';
import '../../css/c/cos2dib7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xf22utbom"/><path class="cos2dib7i"/></g>`,
		"fallback": "streamline-sharp:peace-symbol",
	});
}

export default Component;
