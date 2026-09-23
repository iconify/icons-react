import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mrwdvvw0o.css';
import '../../css/u/uecn1lb3p.css';
import '../../css/k/kgawvdakg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mrwdvvw0o"/><path class="uecn1lb3p"/><path class="kgawvdakg"/></g>`,
		"fallback": "keyline-icons:send-sparkles-sharp-duotone",
	});
}

export default Component;
