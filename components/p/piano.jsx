import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ikn-j9hts.css';
import '../../css/u/usct9w4ok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ikn-j9hts"/><path class="usct9w4ok"/></g>`,
		"fallback": "tdesign:piano",
	});
}

export default Component;
