import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wqq9tn6nm.css';
import '../../css/h/hpplanbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wqq9tn6nm"/><path class="hpplanbmc"/></g>`,
		"fallback": "keyline-icons:user-voice-duotone",
	});
}

export default Component;
