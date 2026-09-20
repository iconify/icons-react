import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ccaahidjq.css';
import '../../css/f/fwdp9bc6y.css';
import '../../css/d/dec2ud7ow.css';
import '../../css/b/bb-2fz92u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ccaahidjq"/><path class="fwdp9bc6y"/><path class="dec2ud7ow"/><path clip-rule="evenodd" class="bb-2fz92u"/></g>`,
		"fallback": "solar:music-library-2-bold",
	});
}

export default Component;
