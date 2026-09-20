import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nwdk4qcol.css';
import '../../css/z/zwgvyizqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nwdk4qcol"/><path class="zwgvyizqg"/></g>`,
		"fallback": "keyline-icons:paint-roller-two-tone",
	});
}

export default Component;
