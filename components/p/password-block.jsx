import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/ho4_h-bkz.css';
import '../../css/v/v0ttfpbfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ho4_h-bkz"/><path class="v0ttfpbfv"/></g>`,
		"fallback": "streamline-sharp:password-block",
	});
}

export default Component;
