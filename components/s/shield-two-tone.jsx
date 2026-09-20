import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ciz47rm9a.css';
import '../../css/f/fqsicfbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ciz47rm9a"/><path class="fqsicfbpi"/></g>`,
		"fallback": "keyline-icons:shield-two-tone",
	});
}

export default Component;
