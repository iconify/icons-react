import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/a_h2u23xb.css';
import '../../css/q/q-4sndczh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="a_h2u23xb"/><path class="q-4sndczh"/></g>`,
		"fallback": "keyline-icons:refresh-cw-sharp-two-tone",
	});
}

export default Component;
