import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wc84ktb0x.css';
import '../../css/o/o_r3tojiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wc84ktb0x"/><path class="o_r3tojiu"/></g>`,
		"fallback": "keyline-icons:repeat-two-tone",
	});
}

export default Component;
