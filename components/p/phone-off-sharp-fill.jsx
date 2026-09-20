import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q-bex34fj.css';
import '../../css/k/ktkuo0bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="q-bex34fj"/><path class="ktkuo0bsy"/></g>`,
		"fallback": "keyline-icons:phone-off-sharp-fill",
	});
}

export default Component;
