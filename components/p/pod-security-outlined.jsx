import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxftmab1w.css';
import '../../css/n/n8m_h_bkm.css';
import '../../css/c/cum1b9uvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxftmab1w"/><circle class="n8m_h_bkm"/><path class="cum1b9uvw"/>`,
		"fallback": "eos-icons:pod-security-outlined",
	});
}

export default Component;
