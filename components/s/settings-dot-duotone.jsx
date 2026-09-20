import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wfufpqbhm.css';
import '../../css/g/gy9n3pbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wfufpqbhm"/><path class="gy9n3pbyo"/></g>`,
		"fallback": "keyline-icons:settings-dot-duotone",
	});
}

export default Component;
