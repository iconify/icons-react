import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hn0xxrb1a.css';
import '../../css/q/qzllh5bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hn0xxrb1a"/><path clip-rule="evenodd" class="qzllh5bwt"/></g>`,
		"fallback": "majesticons:qr-code",
	});
}

export default Component;
