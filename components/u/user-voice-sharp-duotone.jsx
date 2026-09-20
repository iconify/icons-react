import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qf8p8ebcz.css';
import '../../css/r/r8a67rb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qf8p8ebcz"/><path class="r8a67rb9x"/></g>`,
		"fallback": "keyline-icons:user-voice-sharp-duotone",
	});
}

export default Component;
