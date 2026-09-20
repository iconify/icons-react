import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t5n9-dbow.css';
import '../../css/c/cpha-lbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t5n9-dbow"/><path class="cpha-lbty"/></g>`,
		"fallback": "keyline-icons:paint-roller-duotone",
	});
}

export default Component;
