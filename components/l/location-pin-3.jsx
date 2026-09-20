import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q2y7eorwr.css';
import '../../css/b/bjb9rabxp.css';
import '../../css/y/y9coysbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q2y7eorwr"/><path class="bjb9rabxp"/><path class="y9coysbwj"/></g>`,
		"fallback": "streamline-sharp:location-pin-3",
	});
}

export default Component;
