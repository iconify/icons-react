import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ciz47rm9a.css';
import '../../css/v/v83ck9bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ciz47rm9a"/><path class="v83ck9bug"/></g>`,
		"fallback": "keyline-icons:shield-x-two-tone",
	});
}

export default Component;
