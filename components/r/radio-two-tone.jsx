import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bamm4mb1q.css';
import '../../css/y/yz5g-rrpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bamm4mb1q"/><path class="yz5g-rrpl"/></g>`,
		"fallback": "keyline-icons:radio-two-tone",
	});
}

export default Component;
