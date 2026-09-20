import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/foe6t87yf.css';
import '../../css/s/sjsrh2est.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="foe6t87yf"/><path class="sjsrh2est"/></g>`,
		"fallback": "tdesign:user-talk-1",
	});
}

export default Component;
