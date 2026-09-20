import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/wvb6anvsf.css';
import '../../css/c/c_giezb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="wvb6anvsf"/><path class="c_giezb0x"/></g>`,
		"fallback": "streamline-sharp-color:radioactive-1",
	});
}

export default Component;
