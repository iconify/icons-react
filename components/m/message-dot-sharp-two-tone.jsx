import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qbsn57o8z.css';
import '../../css/e/e-m_tnbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qbsn57o8z"/><path class="e-m_tnbrm"/></g>`,
		"fallback": "keyline-icons:message-dot-sharp-two-tone",
	});
}

export default Component;
