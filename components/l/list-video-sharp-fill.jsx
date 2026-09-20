import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tv7158lia.css';
import '../../css/w/w65t0dwgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="tv7158lia"/><path class="w65t0dwgg"/></g>`,
		"fallback": "keyline-icons:list-video-sharp-fill",
	});
}

export default Component;
