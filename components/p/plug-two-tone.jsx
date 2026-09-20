import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/shc-s7oyr.css';
import '../../css/q/qq128bzey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="shc-s7oyr"/><path class="qq128bzey"/></g>`,
		"fallback": "keyline-icons:plug-two-tone",
	});
}

export default Component;
