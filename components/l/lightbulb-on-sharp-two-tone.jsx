import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kh-m_bbrf.css';
import '../../css/l/lyu_zbbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kh-m_bbrf"/><path class="lyu_zbbdz"/></g>`,
		"fallback": "keyline-icons:lightbulb-on-sharp-two-tone",
	});
}

export default Component;
