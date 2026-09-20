import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qggkgrbio.css';
import '../../css/h/hfv1tkb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qggkgrbio"/><path class="hfv1tkb4n"/></g>`,
		"fallback": "keyline-icons:shapes-2-sharp-two-tone",
	});
}

export default Component;
