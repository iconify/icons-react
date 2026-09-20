import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftt3_qbok.css';
import '../../css/m/m_wopvnob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ftt3_qbok"/><path class="m_wopvnob"/></g>`,
		"fallback": "tdesign:thumb-down-1",
	});
}

export default Component;
