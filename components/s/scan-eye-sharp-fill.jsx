import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/f9pk1qbzf.css';
import '../../css/r/r81iret_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="f9pk1qbzf"/><path class="r81iret_p"/></g>`,
		"fallback": "keyline-icons:scan-eye-sharp-fill",
	});
}

export default Component;
