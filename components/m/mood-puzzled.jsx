import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uykoewb1o.css';
import '../../css/t/ts8brxb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uykoewb1o"/><path class="ts8brxb_p"/></g>`,
		"fallback": "tabler:mood-puzzled",
	});
}

export default Component;
