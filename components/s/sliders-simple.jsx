import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pw7rvel_v.css';
import '../../css/a/aaakgqotp.css';
import '../../css/w/wxgs__din.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pw7rvel_v"/><circle class="aaakgqotp"/><circle class="wxgs__din"/></g>`,
		"fallback": "meteor-icons:sliders-simple",
	});
}

export default Component;
