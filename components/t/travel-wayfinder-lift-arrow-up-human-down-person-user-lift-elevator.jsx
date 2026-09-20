import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t31dglbae.css';
import '../../css/q/qe50gbygz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="t31dglbae"/><path class="qe50gbygz"/></g>`,
		"fallback": "streamline:travel-wayfinder-lift-arrow-up-human-down-person-user-lift-elevator",
	});
}

export default Component;
