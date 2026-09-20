import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/ke1-khubj.css';
import '../../css/s/sgctcobtt.css';
import '../../css/g/ghb43ybup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ke1-khubj"/><path class="sgctcobtt"/><path class="ghb43ybup"/></g>`,
		"fallback": "streamline-sharp:user-arrows-account-switch",
	});
}

export default Component;
