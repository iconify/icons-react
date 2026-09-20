import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/viq046pjc.css';
import '../../css/q/q8frx3byj.css';
import '../../css/l/ltt51rbav.css';
import '../../css/c/cxdej94kx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="viq046pjc"/><path class="q8frx3byj"/><path class="ltt51rbav"/><path class="cxdej94kx"/></g>`,
		"fallback": "streamline-color:mobile-phone-camera",
	});
}

export default Component;
