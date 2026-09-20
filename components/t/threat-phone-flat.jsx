import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/urvl__but.css';
import '../../css/g/gbuy8qbtc.css';
import '../../css/x/x1olz2duw.css';
import '../../css/v/vaw605b_n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="urvl__but"/><path clip-rule="evenodd" class="gbuy8qbtc"/><path class="x1olz2duw"/><path clip-rule="evenodd" class="vaw605b_n"/></g>`,
		"fallback": "streamline-flex-color:threat-phone-flat",
	});
}

export default Component;
