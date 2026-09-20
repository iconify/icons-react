import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/ipj5p2b6r.css';
import '../../css/v/vf8rlvbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ipj5p2b6r"/><path class="vf8rlvbfx"/></g>`,
		"fallback": "keyline-icons:navigation-sharp-two-tone",
	});
}

export default Component;
