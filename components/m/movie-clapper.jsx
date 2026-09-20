import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gie9u-byf.css';
import '../../css/s/srg-s5uul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gie9u-byf"/><path class="srg-s5uul"/></g>`,
		"fallback": "tdesign:movie-clapper",
	});
}

export default Component;
