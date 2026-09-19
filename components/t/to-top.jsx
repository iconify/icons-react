import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rv2yhcbae.css';
import '../../css/k/kun-rwb_i.css';
import '../../css/y/y1m_lyb3x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="rv2yhcbae"/><path class="kun-rwb_i"/><path class="y1m_lyb3x"/></g>`,
		"fallback": "icon-park:to-top",
	});
}

export default Component;
