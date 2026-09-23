import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mrwdvvw0o.css';
import '../../css/w/wwm_-isax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mrwdvvw0o"/><path class="wwm_-isax"/></g>`,
		"fallback": "keyline-icons:send-sparkles-sharp-fill",
	});
}

export default Component;
