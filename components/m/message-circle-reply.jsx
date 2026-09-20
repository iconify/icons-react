import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gfviasbeq.css';
import '../../css/n/npq4f_b2z.css';
import '../../css/g/g2f7r-bni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gfviasbeq"/><path class="npq4f_b2z"/><path class="g2f7r-bni"/></g>`,
		"fallback": "lucide:message-circle-reply",
	});
}

export default Component;
